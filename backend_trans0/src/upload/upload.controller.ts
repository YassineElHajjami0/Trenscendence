import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('myFile', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32)
          .fill(null)
          .map(() => (Math.round(Math.random() * 16)).toString(16))
          .join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
    limits: { fileSize: 1000000 }, // 1MB file size limit
  }))
  async uploadFile(@UploadedFile() file) {
    // File uploaded successfully
    console.log(file);
    return { message: 'File uploaded!' };
  }
}
