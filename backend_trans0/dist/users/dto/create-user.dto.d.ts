export declare class CreateUserDto {
    uid?: number;
    status?: string;
    username?: string;
    email: string;
    bio?: string;
    password: string;
    newPassword?: string;
    oldPassword?: string;
    confirmedPassword?: string;
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
    wallet?: number;
    twoFASecret?: string;
}
