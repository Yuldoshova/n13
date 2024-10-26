import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({ type: SchemaTypes.String, required: false })
    name?: string

    @Prop({ type: SchemaTypes.String, required: false })
    email?: string

    @Prop({ type: SchemaTypes.String, required: false })
    phone?: string

    @Prop({ type: SchemaTypes.String, required: false })
    image?: string
}

export const UserSchema = SchemaFactory.createForClass(User)