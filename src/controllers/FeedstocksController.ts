import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedstocksService } from '../services/feedstocks.service';

import type { Product, BodyProduct } from '../interfaces/ProductInterface';

@Controller('feedstocks')
export class FeedstocksController {
  constructor(private readonly feedstocksService: FeedstocksService) { }

  @Post()
  create(@Body() body: BodyProduct) {
    return this.feedstocksService.create(body);
  }

  @Get()
  findAll() {
    return this.feedstocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedstocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: BodyProduct) {
    return this.feedstocksService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedstocksService.remove(+id);
  }
}
