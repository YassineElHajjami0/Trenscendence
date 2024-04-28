import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators/public.decorator';
import { UploadService } from './upload.service';

@Public()
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  // @Post()
  // @UseInterceptors(AnyFilesInterceptor())
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   if (!file) {
  //     throw new Error('No file uploaded');
  //   }

  //   const originalFileName = file.originalname; // Get the original file name

  //   // Custom message with the original file name
  //   const message = `File '${originalFileName}' uploaded successfully`;

  //   // const message = await this.uploadService.saveFile(file);
  //   return { message };
  // }

  // @Post()
  // @UseInterceptors(AnyFilesInterceptor())
  // async uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  //   this.uploadService.saveFile(files);
  //   if (!files) {
  //     return { message: 'No file uploaded' };
  //   }
  //   // const message = await this.uploadService.saveFile(file);
  //   // return { message };
  //   return 'Hello';
  // }
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFile(
    @Query('type') type,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(type);
    this.uploadService.saveFile(files);
    if (!files) {
      return { message: 'No file uploaded' };
    }
    // const message = await this.uploadService.saveFile(file);
    // return { message };
    return 'Hello';
  }
}
