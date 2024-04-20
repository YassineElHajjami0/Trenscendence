import {
  Controller,
  Post,
  Get,
  UseGuards,
  Body,
  Res,
  Req,
  Redirect,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Public } from './auth/decorators/public.decorator';
import { FortyTwoGuard } from './auth/guards/forty-two-auth.guard';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
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
  @Post('auth/login')
  async login(@Body() user, @Req() req, @Res({ passthrough: true }) res) {
    const bearer_token = await this.authService.login(req.user);
    this.setCookie(res, bearer_token);
    return {
      user_token: bearer_token,
      user: req.user,
    };
  }

  // @UseGuards(LocalAuthGuard)
  // @Public()
  //   @Post('auth/signup')
  //   async signup(@Body() user, @Req() req, @Res({ passthrough: true }) res) {
  // const bearer_token = await this.authService.login(req.user);
  // this.setCookie(res, bearer_token);
  // return {
  //   user_token: bearer_token,
  //   user: req.user,
  // };
  // }

  @Public()
  @Post('auth/signup')
  async signup(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res,
  ) {
    // await this.authService.signUp(createUserDto);
    // ??

    const user = await this.authService.signUp(createUserDto);
    const bearer_token = await this.authService.login(user);
    this.setCookie(res, bearer_token);
    return {
      user_token: bearer_token,
      user: user,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    this.setCookie(res);
    return {};
  }

  @Get('/auth/login-42')
  @Public()
  @UseGuards(FortyTwoGuard)
  async fortyTwoAuth() {
    console.log('VALIDATE 00');
    return {};
  }

  @Get('/auth/fortyTwo/redirect')
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
    return bearer_token
    return `User From 42 logged In`;
  }
}
