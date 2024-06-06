import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUserId(uid: number): Promise<{
        uid: number;
        status: string;
        username: string;
        email: string;
        bio: string;
        password: string;
        twoFA: boolean;
        avatar: string;
        paddle: string;
        banner: string;
        wallet: number;
        level: number;
        rank: string;
        win: number;
        lose: number;
        role: string;
        strategy: string;
        twoFASecret: string;
    }>;
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<string>;
    signUp(createUserDto: CreateUserDto): Promise<any>;
    signUpWithProvider(createUserDto: CreateUserDto): Promise<{
        uid: number;
        bearer_token: string;
    }>;
    fortyTwoLogin(user: any): Promise<string>;
    generateRandomPassword(length: number): string;
    generateTwoFactorAuthenticationSecret(user: any): Promise<{
        secret: string;
        otpAuthUrl: string;
    }>;
    generateQrCodeDataURL(otpAuthUrl: string): Promise<any>;
    isTwoFactorCodeValid(body: any): boolean;
    loginWith2fa(userWithoutPsw: Partial<CreateUserDto>): Promise<{
        email: string;
        access_token: string;
    }>;
}
