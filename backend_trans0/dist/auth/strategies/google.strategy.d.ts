import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import { AuthService } from '../auth.service';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
