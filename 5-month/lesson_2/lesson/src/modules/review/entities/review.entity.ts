import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from "mongoose";

export type ReviewDocument = HydratedDocument<Review>

@Schema({ collection: "reviews", timestamps: true, versionKey: false, autoIndex: true })
export class Review {

    @Prop({ required: true, type: SchemaTypes.String })
    content: string

    @Prop({ type: SchemaTypes.ObjectId, ref: "User", required: true })
    user: string
}

export const ReviewSchema = SchemaFactory.createForClass(Review)