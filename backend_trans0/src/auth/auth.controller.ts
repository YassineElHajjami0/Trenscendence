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
  Header,
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

  @UseGuards(FortyTwoGuard)
  @Get('login-42')
  @Public()
  async fortyTwoAuth() {
    return {};
  }

  @UseGuards(FortyTwoGuard)
  @Get('fortyTwo/redirect')
  @Public()
  @Redirect('http://localhost:3002/login', 302)
  async googleAuthRedirect(@Req() req, @Res({ passthrough: true }) res) {
    const createUserDto = {
      username: req.user.username,
      email: req.user.email,
      password: req.user.password,
    };

    const cookies = await this.authService.signUpWith42(createUserDto);
    // this.setCookie(res, cookies.bearer_token);

    res.cookie('loggedUser', cookies.uid, { httpOnly: true });
    res.cookie('userToken', cookies.bearer_token, { httpOnly: true });
    return {
      user_token: cookies.bearer_token,
      user: cookies.uid,
    };
  }

  // @Get()
  // async fortyTwoAuth() {

  //   // send a post request
  //   const credentials = {
  //     grant_type: 'authorization_code',
  //     client_id:
  //       'u-s4t2ud-2eb7839586c2db3c5cb771db02b6ee638d6ae43d54ac0db84c2a8fdbfb61e654',
  //     client_secret:
  //       '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',
  //     redirect_uri: 'http://localhost:3000/auth/fortyTwo/redirect/',
  //     code: '2cfbc85a4606a5658c65b37a1d469a6d9b7436a45048d9f57037ac5c912159ae',
  //   };
  //   const response = await fetch('https://api.intra.42.fr/oauth/token/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add any other headers if needed, such as authorization headers
  //     },
  //     body: JSON.stringify(credentials),
  //   });
  //   const data = await response.json();
  //   // Get user
  //   const user = await fetch('https://api.intra.42.fr/v2/me/', {
  //     headers: {
  //       Authorization: `Bearer ${data.access_token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   return user;
  // }

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
