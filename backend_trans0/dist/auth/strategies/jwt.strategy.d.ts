import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<{
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
    private static extractJWT;
}
export {};
