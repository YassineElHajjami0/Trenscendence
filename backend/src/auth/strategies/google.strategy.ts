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
      clientID: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE,
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  // async validate(
  //   _accessToken: string,
  //   _refreshToken: string,
  //   profile: any,
  //   done: VerifyCallback,
  // ): Promise<any> {
  //   const { name, emails } = profile;
  //   console.log('HELLO WORLD');
  //   // const user = await this.authService.signUpWithProvider({
  //   //   username: `${name.givenName}_${name.familyName}`,
  //   //   email: emails[0].value,
  //   //   password: this.authService.generateRandomPassword(10),
  //   //   strategy: 'google',
  //   // });

  //   const user = {
  //     username: `${name.givenName}_${name.familyName}`,
  //     email: emails[0].value,
  //     password: this.authService.generateRandomPassword(10),
  //     strategy: 'google',
  //   };
  //   done(null, user);
  //   return user;
  // }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log('VALIDATE');
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      username: `${name.givenName}_${name.familyName}`,
      password: this.authService.generateRandomPassword(10),
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
