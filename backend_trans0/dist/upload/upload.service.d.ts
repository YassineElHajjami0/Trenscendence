/// <reference types="multer" />
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { DatabaseService } from 'src/database/database.service';
export declare class UploadService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createUploadDto: CreateUploadDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUploadDto: UpdateUploadDto): string;
    updateUser(uid: number, type: string, value: string): Promise<{
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
    remove(id: number): string;
    saveFile(uid: number, file: Express.Multer.File): Promise<any>;
}
