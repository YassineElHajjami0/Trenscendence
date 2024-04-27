import {
  Controller,
  Post,
  Get,
  UseGuards,
  Body,
  Res,
  Req,
  Redirect,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { FortyTwoGuard } from './guards/forty-two-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CustomValidationPipe } from './pipes/user.validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

  @Get('login-42')
  @Public()
  @UseGuards(FortyTwoGuard)
  async fortyTwoAuth() {
    console.log('VALIDATE 00');
    return {};
  }

  @Get('fortyTwo/redirect')
  @Public()
  // @Redirect('http://localhost:3002/login', 302)
  @UseGuards(FortyTwoGuard)
  async googleAuthRedirect(@Req() req, @Res({ passthrough: true }) res) {
    const user = {
      username: req.user.email,
      accessToken: req.user.accessToken,
    };
    const bearer_token = await this.authService.fortyTwoLogin(user);
    this.setCookie(res, bearer_token);
    return `User From 42 logged In`;
  }

  @Get('tokens')
  async isTokenExpired(@Req() req) {
    console.log(req.user);
    if (req.user) return { expired: true };
    return { expired: true };
  }

  @Public()
  @Get('test')
  test() {
    return { expired: true };
  }
}
