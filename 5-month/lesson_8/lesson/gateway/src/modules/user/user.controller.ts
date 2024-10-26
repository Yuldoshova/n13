import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User Service')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'create user' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'create user' })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'find one user' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ summary: 'update user' })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update({ id, ...updateUserDto });
  }

  @ApiOperation({ summary: 'delete user' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
