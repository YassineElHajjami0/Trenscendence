import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
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

  async saveFile(file: Express.Multer.File) {
    try {
      const filePath = path.join(process.cwd(), 'public', file.originalname);
      await fs.promises.writeFile(filePath, file.buffer);
      return 'Uploaded successfully';
    } catch (error) {
      return error.message;
    }
  }
}
