import { Body, Controller, Delete, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(
        private service: AuthService
    ) { }

    @Post('/login')
    async login(
        @Body("email") email: string
    ) {
        return await this.service.login(email)
    }

    @Post('/check-otp')
    async checkotp(
        @Body('otp', ParseIntPipe) otp: number,
        @Body('userId', ParseIntPipe) userId: number,
    ) {
        return await this.service.checkOtp(otp, userId)
    }

    @Delete('/remove')
    async removeOtp(
        @Body('userId', ParseIntPipe) userId: number,
    ) {
        return await this.service.deleteOtp(userId)
    }
}