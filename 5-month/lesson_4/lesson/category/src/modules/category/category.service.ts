import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async create(create: CreateCategoryDto) {
    return await this.categoryModel.create({
      name: create.name,
      description: create.description,
    });
  }

  async findAll() {
    return await this.categoryModel.findAll();
  }

  async findOne(id: number) {
    const findCategory = await this.categoryModel.findByPk(id);

    if (!findCategory) {
      throw new NotFoundException('Category not found!');
    }
    return findCategory;
  }

  async update(update: UpdateCategoryDto) {
    const findCategory = await this.categoryModel.findByPk(update.id);
    if (!findCategory) {
      throw new NotFoundException('Category not found!');
    }
    findCategory.name = update.name;
    findCategory.description = update.description;
    return await findCategory.save();
  }

  async remove(id: number) {
    const findCategory = await this.categoryModel.findByPk(id);
    if (!findCategory) {
      throw new NotFoundException('Category not found!');
    }
    return await findCategory.destroy();
  }
}
