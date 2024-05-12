import {
  Controller,
  Post,
  Get,
  UseGuards,
  Body,
  Res,
  Req,
  Request,
  Response,
  Redirect,
  UsePipes,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { FortyTwoGuard } from './guards/forty-two-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CustomValidationPipe } from './pipes/user.validation.pipe';
import { GoogleGuard } from './guards/google-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) { }

  setCookie(@Res() res, bearer_token?: string) {
    if (!bearer_token) bearer_token = '';
    res.cookie(
      res.cookie('user_token', bearer_token, {
        expires: new Date(Date.now() + 3600000),
      }),
    );
  }

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Body() user, @Req() req, @Res({ passthrough: true }) res) {
    const bearer_token = await this.authService.login(req.user);
    if (req.user.twoFA) {
      return { user: req.user };
    }
    this.setCookie(res, bearer_token);
    return {
      user_token: bearer_token,
      user: req.user,
    };
  }

  @Public()
  @Post('signup')
  @UsePipes(new CustomValidationPipe())
  async signup(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res,
  ) {
    const user = await this.authService.signUp(createUserDto);
    const bearer_token = await this.authService.login(user);
    this.setCookie(res, bearer_token);
    return {
      user_token: bearer_token,
      user: user,
    };
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    this.setCookie(res);
    return {};
  }

  @UseGuards(FortyTwoGuard)
  @Get('login-42')
  @Public()
  async fortyTwoAuth() {
    return {};
  }

  @UseGuards(FortyTwoGuard)
  @Get('fortyTwo/redirect')
  @Public()
  @Redirect('http://localhost:5252/', 302)
  async fortyTwoAuthRedirect(@Req() req, @Res({ passthrough: true }) res) {
    const createUserDto = {
      username: req.user.username,
      email: req.user.email,
      password: req.user.password,
    };

    const cookies = await this.authService.signUpWithProvider(createUserDto);
    // this.setCookie(res, cookies.bearer_token);
    const userData = {
      loggedUser: cookies.uid,
      userToken: cookies.bearer_token,
    };
    res.cookie('userData', JSON.stringify(userData));
    // res.cookie('loggedUser', cookies.uid, { httpOnly: true });
    // res.cookie('userToken', cookies.bearer_token, { httpOnly: true });
    return {
      user_token: cookies.bearer_token,
      user: cookies.uid,
    };
  }

  @Get('google')
  @UseGuards(GoogleGuard)
  @Public()
  async googleAuth() {
    console.log('FIRST');
    return {};
  }

  @Get('google/redirect')
  @UseGuards(GoogleGuard)
  @Public()
  @Redirect('http://localhost:5252/', 302)
  async googleAuthRedirect(@Req() req, @Res({ passthrough: true }) res) {
    console.log('THIRD');
    const createUserDto = {
      username: req.user.username,
      email: req.user.email,
      password: req.user.password,
    };

    const cookies = await this.authService.signUpWithProvider(createUserDto);
    // this.setCookie(res, cookies.bearer_token);
    const userData = {
      loggedUser: cookies.uid,
      userToken: cookies.bearer_token,
    };
    res.cookie('userData', JSON.stringify(userData));
    // res.cookie('userToken', cookies.bearer_token, { httpOnly: true });
    return {
      user_token: cookies.bearer_token,
      user: cookies.uid,
    };
  }

  @Get('tokens')
  async isTokenExpired(@Req() req) {
    console.log(req.user);
    if (req.user) return { expired: true };
    return { expired: true };
  }

  // I need uid, email
  @Post('2fa/turn-on')
  // @UseGuards(Jwt2faAuthGuard)
  async register(@Res({ passthrough: true }) res, @Body() body) {
    const { otpAuthUrl } =
      await this.authService.generateTwoFactorAuthenticationSecret(body);

    return res.json(await this.authService.generateQrCodeDataURL(otpAuthUrl));
  }

  // I need the whole user in body
  @Post('2fa')
  @Public()
  @HttpCode(200)
  async authenticate(@Res({ passthrough: true }) res, @Body() body) {
    const isCodeValid = this.authService.isTwoFactorCodeValid(body);

    if (!isCodeValid) {
      throw new UnauthorizedException('Wrong authentication code');
    }
    const bearer_token = await this.authService.login(body.user);
    this.setCookie(res, bearer_token);

    return { userToken: bearer_token };
  }
}
