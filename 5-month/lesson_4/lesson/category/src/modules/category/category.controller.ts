import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern('createCategory')
  create(@Payload() create: CreateCategoryDto) {
    return this.categoryService.create(create);
  }

  @MessagePattern('getAllCategories')
  findAll() {
    return this.categoryService.findAll();
  }

  @MessagePattern('getSingleCategory')
  findOne(@Payload() id: number) {
    return this.categoryService.findOne(id);
  }

  @MessagePattern('updateCategory')
  update(@Payload() update: UpdateCategoryDto) {
    return this.categoryService.update(update);
  }

  @MessagePattern('deleteCategory')
  remove(@Payload() id: number) {
    return this.categoryService.remove(id);
  }
}
