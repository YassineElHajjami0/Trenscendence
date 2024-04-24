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

  @MinLength(8)
  @Matches(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  newPassword?: string = 'test1234';

  @MinLength(8)
  @Matches(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  oldPassword?: string = 'test1234';

  @MinLength(8)
  @Matches(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  confirmedPassword?: string = 'test1234';

  twoFA?: boolean;

  // avatar?: string;
  banner?: string;
  level?: number;
  points?: number;
  rank?: string;
  win?: number;
  lose?: number;
  strategy?: string;
  role?: string;
  wallet?: number;
}
