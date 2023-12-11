import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Shoes as ShoesModel } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

const idPipe = new ParseIntPipe({
  exceptionFactory() {
    return new BadRequestException('ID must be a number');
  },
});

@ApiTags('products')
@Controller('/api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Fail Validation' })
  @HttpCode(201)
  create(@Body() createProductDto: CreateProductDto): Promise<ShoesModel> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all products' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(): Promise<ShoesModel[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a product by ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'ID must be an integer' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findOne(@Param('id', idPipe) id: string): Promise<ShoesModel | null> {
    return this.productsService.findOne({ id: +id });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'ID must be an integer' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  update(
    @Param('id', idPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update({
      where: { id: +id },
      data: updateProductDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'ID must be an integer' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  remove(@Param('id', idPipe) id: string) {
    return this.productsService.remove({ id: +id });
  }
}
