import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUserId(uid: number) {
    const user = await this.usersService.validateUserId(uid);
    return user;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(username, pass);
    return user;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.uid,
      role: user.role,
      twoFASecret: user.twoFASecret,
    };
    return this.jwtService.sign(payload);
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
  }

  async signUpWithProvider(createUserDto: CreateUserDto) {
    let user = await this.usersService.findByEmail(createUserDto.email);

    if (!user) {
      user = await this.signUp(createUserDto);
    }
    const bearer_token = await this.login(user);
    return {
      uid: user.uid,
      bearer_token: bearer_token,
    };
  }

  async fortyTwoLogin(user: any) {
    if (!user) {
      return 'no user found';
    }
    const payload = { user };
    return this.jwtService.sign(payload);
  }

  generateRandomPassword(length: number): string {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  // Two FA Section
  // 1
  async generateTwoFactorAuthenticationSecret(user: CreateUserDto) {
    const secret = authenticator.generateSecret();

    const otpAuthUrl = authenticator.keyuri(
      user.email,
      'Transcendance',
      secret,
    );
    await this.usersService.setTwoFaSecret(secret, user.uid);
    await this.usersService.turnOnTwoFA(user.uid);

    return {
      secret,
      otpAuthUrl,
    };
  }

  // 2
  async generateQrCodeDataURL(otpAuthUrl: string) {
    return toDataURL(otpAuthUrl);
  }

  // 3
  isTwoFactorCodeValid(twoFaCode: string, user: any) {
    console.log(twoFaCode);
    console.log('---> ', user.twoFASecret);
    return authenticator.verify({
      token: twoFaCode,
      secret: user.twoFASecret,
    });
  }

  // 3
  async loginWith2fa(userWithoutPsw: Partial<CreateUserDto>) {
    const payload = {
      email: userWithoutPsw.email,
      isTwoFactorAuthenticationEnabled: !!userWithoutPsw.twoFA,
      isTwoFactorAuthenticated: true,
    };

    return {
      email: payload.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
