import { ApiProperty } from "@nestjs/swagger"
import { CreateReviewRequest } from "../interfaces"

export class CreateReviewDto implements CreateReviewRequest{

    @ApiProperty({
        type: String,
        required: true,
        default: "Bu zo'r kitob!"
    })
    content: string

    @ApiProperty({
        type: String,
        required: true,
        default: "66e72d2d063756e5de69bdc9"
    })
    userId: string
}
