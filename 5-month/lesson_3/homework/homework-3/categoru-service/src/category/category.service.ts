import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category){}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create({name: createCategoryDto.name});
  }

  async findAll() {
    return await this.categoryModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    // return await this.categoryModel.update(id,{name: updateCategoryDto.name})
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
