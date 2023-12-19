import { Injectable } from '@nestjs/common';

import type { BodyProduct } from '../interfaces/ProductInterface';

@Injectable()
export class FeedstocksService {
  create(body: BodyProduct) {
    return 'This action adds a new feedstock';
  }

  findAll() {
    return `This action returns all feedstocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedstock`;
  }

  update(id: number, body: BodyProduct) {
    return `This action updates a #${id} feedstock`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedstock`;
  }
}
