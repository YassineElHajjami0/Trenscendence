import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import { AuthService } from '../auth.service';

// npm install -D @types/passport-google-oauth2
// npm install passport-google-oauth2
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID:
        '93931900633-fh47s9vlc3kgr0v235u6baudv916h2pc.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails } = profile;

    // const user = await this.authService.signUpWithProvider({
    //   username: `${name.givenName}_${name.familyName}`,
    //   email: emails[0].value,
    //   password: this.authService.generateRandomPassword(10),
    //   strategy: 'google',
    // });
    const user = {
        username: `${name.givenName}_${name.familyName}`,
        email: emails[0].value,
        password: this.authService.generateRandomPassword(10),
        strategy: 'google',

    }
    // done(null, user);
    return user;
  }
}
