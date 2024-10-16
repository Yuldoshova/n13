import { Injectable } from "@nestjs/common";
import { CategoryClient } from "./category.client";

@Injectable()
export class Categoryservice{
    constructor(private categoryClient: CategoryClient){}
    getCAtegoryList(){
        return this.categoryClient.getAllCategories()
    }
    createCategory(name: string){
        return this.categoryClient.createCategory(name)
    }
}