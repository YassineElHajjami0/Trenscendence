import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import * as fs from 'fs';
import * as path from 'path';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UploadService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUploadDto: CreateUploadDto) {
    return 'This action adds a new upload';
  }

  findAll() {
    return `This action returns all upload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }

  async saveFile(uid: number, file: Express.Multer.File) {
    try {
      const filePath = path.join(process.cwd(), 'public', file.originalname);
      console.log(filePath);
      await fs.promises.writeFile(filePath, file.buffer);
      await this.databaseService.t_User.update({
        where: { uid },
        data: {
          avatar: '/' + file.originalname,
        },
      });
      return 'Uploaded successfully';
    } catch (error) {
      return error.message;
    }
  }
}
