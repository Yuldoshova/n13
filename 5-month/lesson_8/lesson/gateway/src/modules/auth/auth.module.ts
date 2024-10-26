import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { GoogleStrategy } from "./strategies";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [GoogleStrategy, AuthService],
    controllers: [AuthController]
})
export class AuthModule { }