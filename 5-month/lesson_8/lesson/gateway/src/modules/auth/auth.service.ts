import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./models";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwt: JwtService
    ) { }

    async googleAuth(req: any) {

        const findUser = await this.userModel.findOne({ email: req.user.emails[0].value })
        if (findUser) {
            const accessToken = this.jwt.sign(
                { id: findUser.id, name: findUser.name },
                { secret: "secretkey" })

            return { accessToken, user: findUser, isNew: false }
        }

        const newUser = await this.userModel.create({
            name: req.user.displayName,
            email: req.user.emails[0].value,
            image: req.user.photos[0].value
        })
        const accessToken = this.jwt.sign(
            { id: newUser.id, name: newUser.name },
            { secret: "secretkey" })

        return { accessToken, user: newUser, isNew: true }
    }
}