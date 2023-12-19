import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  Res
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

import type { BodyProduct } from '../interfaces/ProductInterface';
import type { Response } from 'express';

@Controller('/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('/create')
  async create(@Body() body: BodyProduct, @Res() response: Response) {
    try {
      if (
        !body.name || !body.date_production || !body.price
      ) {
        response.status(400).send('Values in body is required')
        return
      }

      const productExists = await this.productsService.findByNameAndDate(body)
      if (productExists) {
        response.status(404).json({ error: 'Product exists' })
        return
      }

      await this.productsService.create(body)
      response.status(201).send('Successfully created product')
    } catch (error) {
      console.log(error)
      response.status(500).send('Internal server error')
    }
  }

  @Get('/get/all')
  async findAll(@Res() response: Response) {
    try {
      const products = await this.productsService.findAll()

      if (!products) {
        response.status(404).send('Products not found')
        return
      }

      response.status(200).send(products)
    } catch (error) {
      console.log(error)
      response.status(500).send('Internal server error')
    }
  }


  @Get('/get/:id')
  async findById(@Param('id') id: string, @Res() response: Response) {
    try {
      if (!id) {
        response.status(400).send('ID is required')
      }

      const productExists = await this.productsService.findById(+id)

      if (!productExists) {
        response.status(404).send('Product not found')
      }

      response.status(200).send(productExists)
    } catch (error) {
      console.log(error)
      response.status(500).send('Internal server error')
    }
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() body: BodyProduct, @Res() response: Response) {
    try {
      if (!id) {
        response.status(400).send('ID is required')
        return
      }
      const productExists = await this.productsService.findByNameAndDate(body)
      if (!productExists) {
        response.status(404).send('Product not found')
        return
      }
      await this.productsService.update(+id, body)
    } catch (error) {
      console.log(error)
      response.status(500).send('Internal server error')
    }
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
