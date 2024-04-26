import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-42';
import { Role } from '../enums/role.enum';
import { AuthService } from '../auth.service';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, 'FortyTwo') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID:
        'u-s4t2ud-2eb7839586c2db3c5cb771db02b6ee638d6ae43d54ac0db84c2a8fdbfb61e654', //FORTYTWO_APP_ID,
      clientSecret:
        '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', //FORTYTWO_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/fortyTwo/redirect',
      // scope: ['email', 'profile'],
    });
  }

  // refresh token ??
  // store in req the user
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log('VALIDATE');
    // console.log(profile._json);
    const { username, email } = profile._json;
    const user = await this.authService.signUpWith42({
      username: username,
      email: email,
      password: this.authService.generateRandomPassword(10),
      strategy: '42',
    });
    done(null, user);
    return user;
  }
}
