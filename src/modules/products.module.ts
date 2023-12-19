import { Module } from '@nestjs/common';

import { FeedstocksModule } from './feedstocks.module';
import { ProductsService } from '../services/products.service';
import { ProductsController } from '../controllers/ProductsController';

@Module({
  imports: [FeedstocksModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
