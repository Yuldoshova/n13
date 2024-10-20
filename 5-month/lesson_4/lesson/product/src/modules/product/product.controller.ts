import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('createProduct')
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @MessagePattern('getAllProducts')
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern('getSingleProduct')
  findOne(@Payload() id: number) {
    return this.productService.findOne(id);
  }

  @MessagePattern('updateProduct')
  update(@Payload() updateProductDto: UpdateProductDto) {
    return this.productService.update(updateProductDto);
  }

  @MessagePattern('deleteProduct')
  remove(@Payload() id: number) {
    return this.productService.remove(id);
  }
}
