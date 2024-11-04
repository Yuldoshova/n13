import { RedisService } from "@client";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";

interface User {
    id: number,
    email: string
}

@Injectable()
export class AuthService {
    users: User[] = [{
        id: 1,
        email: "example@gmail.com"
    }]

    constructor(
        private redisService: RedisService
    ) { }

    async login(email: string) {
        const findUser = this.users.find((user) => user.email == email)
        if (!findUser) {
            throw new NotFoundException("User not found!")
        }

        const otp = this.#_generateOtp()

        await this.redisService.setValue({
            key: `otp-${findUser.id}`,
            value: otp,
            expireTime: 120
        })

        return {
            message: "Login successful",
            otp
        }
    }

    async checkOtp(otp: number, userId: number) {
        const storedOtp = await this.redisService.getValue(`otp-${userId}`)
        if (!storedOtp || storedOtp.toString() !== otp.toString()) {
            throw new ConflictException("Invalid OTP")
        }

        return true
    }

    async deleteOtp(userId: number) {
        return await this.redisService.deleteValue(`otp-${userId}`)
    }

    #_generateOtp() {
        return Math.floor(Math.random() * 100000 + 1)
    }
}