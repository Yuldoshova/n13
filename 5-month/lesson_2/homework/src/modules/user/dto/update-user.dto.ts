import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        type: String,
        required: false,
        default: "John Doe"
    })
    name: string

    @ApiProperty({
        type: String,
        required: false,
        default: "john@gmail.com",
    })
    email: string

    @ApiProperty({
        type: Number,
        required: false,
        default: 50
    })
    age: number
}
