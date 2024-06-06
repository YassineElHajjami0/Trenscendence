import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    setCookie(res: any, bearer_token?: string): void;
    login(user: any, req: any, res: any): Promise<{
        user: any;
        user_token?: undefined;
    } | {
        user_token: string;
        user: any;
    }>;
    signup(createUserDto: CreateUserDto, res: any): Promise<{
        user_token: string;
        user: any;
    }>;
    logout(res: any): Promise<{}>;
    fortyTwoAuth(): Promise<{}>;
    fortyTwoAuthRedirect(req: any, res: any): Promise<{
        user_token: string;
        user: number;
    }>;
    googleAuth(): Promise<{}>;
    googleAuthRedirect(req: any, res: any): Promise<{
        user_token: string;
        user: number;
    }>;
    isTokenExpired(req: any): Promise<{
        expired: boolean;
    }>;
    register(body: any): Promise<any>;
    authenticate(res: any, body: any): Promise<{
        userToken: string;
        user: any;
    }>;
}
