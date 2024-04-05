import { IsEmail, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  uid?: number;

  status?: string;

  @MinLength(5)
  username?: string;

  @IsEmail()
  email: string;

  bio?: string;

  @MinLength(8)
  @Matches(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  password: string;

  twoFA?: boolean;

  avatar?: string;
  banner?: string;
  level?: number;
  points?: number;
  rank?: string;
  win?: number;
  lose?: number;
  strategy?: string;
  role?: string;
}
