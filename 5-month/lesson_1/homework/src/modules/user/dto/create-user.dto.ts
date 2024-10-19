import { ApiProperty } from "@nestjs/swagger"
import { CreateUserRequest } from "../interfaces"

export class CreateUserDto implements CreateUserRequest {

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

    @ApiProperty({
        type: [String],
        required: false,
        default: ["66e72d2d063756e5de69bdc9", "66e72d2d063756e5de69bdc8"]
    })
    reviews: string[]
}
