import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  phone?: string;
  name?: string;
  email?: string;
  password?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UpdatePhone extends PartialType(CreateUserDto) {
  phone?: string;
}
