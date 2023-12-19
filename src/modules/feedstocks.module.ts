import { Module } from '@nestjs/common';
import { FeedstocksService } from '../services/feedstocks.service';
import { FeedstocksController } from '../controllers/FeedstocksController';

@Module({
  controllers: [FeedstocksController],
  providers: [FeedstocksService],
})
export class FeedstocksModule { }
