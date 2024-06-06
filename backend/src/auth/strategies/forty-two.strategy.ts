import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';
import { AuthService } from '../auth.service';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, 'FortyTwo') {
  constructor(private readonly authService: AuthService) {
    super({
      // clientID: process.env.CLIENT_ID_FORTY_TWO,
      // clientSecret: process.env.CLIENT_SECRET_FORTY_TWO,
      clientID:
        'u-s4t2ud-2eb7839586c2db3c5cb771db02b6ee638d6ae43d54ac0db84c2a8fdbfb61e654',
      clientSecret:
        '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',
      callbackURL: 'http://localhost:3000/auth/fortyTwo/redirect/',
      Scope: ['profile'],
    });
  }
  // refresh token ??
  // store in req the user
  async validate(accessToken: string, refreshToken: string, profile: any) {
    console.log('Callback url ', process.env.FORTY_TWO_CALL_BACK);
    const { login, email } = profile._json;
    // const user = await this.authService.signUpWithProvider({
    //   username: login,
    //   email: email,
    //   password: this.authService.generateRandomPassword(10),
    //   strategy: '42',
    // });
    const user = {
      username: login,
      email: email,
      password: this.authService.generateRandomPassword(10),
      strategy: '42',
    };
    // done(null, user);
    return user;
  }
}
