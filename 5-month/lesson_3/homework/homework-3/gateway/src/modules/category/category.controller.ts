import { Body, Controller, Get, Post } from "@nestjs/common";
import { Categoryservice } from "./category.service";
import { CreateCategoryDto } from "./dtos/create-category.dtos";


@Controller()
export class CategoryController{
    constructor(private service: Categoryservice){}
    @Get()
    getCategories(){
        return this.service.getCAtegoryList()
    }
    @Post()
    createCategory(@Body()payload: CreateCategoryDto){
        return this.service.createCategory(payload.name)
    }
}