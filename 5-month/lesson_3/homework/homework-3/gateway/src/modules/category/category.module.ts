import { Module } from "@nestjs/common";
import { Categoryservice } from "./category.service";
import { CategoryClient } from "./category.client";
import { CategoryController } from "./category.controller";

@Module({
    providers: [Categoryservice,CategoryClient],
    controllers: [CategoryController]
})
export class CategoryModule{

}