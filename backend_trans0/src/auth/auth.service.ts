import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUserId(uid: number) {
    const user = await this.usersService.validateUserId(uid);
    return user === undefined;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(username, pass);
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.uid, role: user.role };
    return this.jwtService.sign(payload);
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
  }

  async signUpWith42(createUserDto: CreateUserDto) {
    let user = await this.usersService.findByEmail(createUserDto.email);
    console.log(user);
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
}
