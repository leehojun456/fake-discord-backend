import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePhone, UpdateUserDto } from './dto/update-user.dto';
import { faker } from '@faker-js/faker';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findOne(@Request() req: any) {
    const userId = req.user.id;
    return await this.userService.findOne(userId);
  }

  @UseGuards(AuthGuard)
  @Patch('/phone')
  async updatePhone(@Request() req: any, @Body() updatePhone: UpdatePhone) {
    const userId = req.user.id;
    return await this.userService.phoneUpdate(userId, updatePhone);
  }

  @UseGuards(AuthGuard)
  @Patch('/avatar')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatar(
    @Request() req: any,
    @UploadedFile(
      new ParseFilePipe({
        validators: [],
      }),
    )
    files: Express.Multer.File,
  ) {
    const userId = req.user.id;
    return await this.userService.updateAvatar(userId, files);
  }

  @UseGuards(AuthGuard)
  @Patch('/banner')
  @UseInterceptors(FileInterceptor('file'))
  async updateBanner(
    @Request() req: any,
    @UploadedFile(
      new ParseFilePipe({
        validators: [],
      }),
    )
    files: Express.Multer.File,
  ) {
    const userId = req.user.id;
    return await this.userService.updateBanner(userId, files);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
