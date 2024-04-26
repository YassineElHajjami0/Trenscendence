import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';
import { AuthService } from '../auth.service';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, 'FortyTwo') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID:
        'u-s4t2ud-2eb7839586c2db3c5cb771db02b6ee638d6ae43d54ac0db84c2a8fdbfb61e654', //FORTYTWO_APP_ID,
      clientSecret:
        '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', //FORTYTWO_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/fortyTwo/redirect/',
      Scope: ['profile'],
    });
  }

  // refresh token ??
  // store in req the user
  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { login, email } = profile._json;
    const user = await this.authService.signUpWith42({
      username: login,
      email: email,
      password: this.authService.generateRandomPassword(10),
      strategy: '42',
    });

    // done(null, user);
    return user;
  }
}
