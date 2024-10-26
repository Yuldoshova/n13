import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {

    constructor(
        private service: AuthService
    ) { }

    @UseGuards(AuthGuard("google"))
    @Get('/google')
    async googleAuthh() { }

    @UseGuards(AuthGuard("google"))
    @Get('/google/callback')
    async googleAuthCallback(@Req() request: any) {
        return this.service.googleAuth(request)
    }
}