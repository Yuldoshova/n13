import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        type: String,
        required: true,
        default: "John Doe"
    })
    name: string

    @ApiProperty({
        type: String,
        required: true,
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
