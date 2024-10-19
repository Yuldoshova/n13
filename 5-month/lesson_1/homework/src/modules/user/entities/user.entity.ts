import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument, SchemaTypes } from "mongoose"
import { Review } from "@modules"

export type UserDocument = HydratedDocument<User>

@Schema({ collection: "users", timestamps: true, autoIndex: true, versionKey: false })
export class User {

    @Prop({ type: SchemaTypes.String, required: true })
    name: string

    @Prop({ type: SchemaTypes.String, required: true, unique: true })
    email: string

    @Prop({ type: SchemaTypes.Number, required: false, min: 10 })
    age: number

    @Prop({ type: [SchemaTypes.ObjectId], ref:"Review", })
    reviews: Review[]
}

export const UserSchema = SchemaFactory.createForClass(User)
