/// <reference types="multer" />
import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFile(uid: string, type: string, files: Array<Express.Multer.File>): Promise<{
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
    } | {
        message: string;
    }>;
}
