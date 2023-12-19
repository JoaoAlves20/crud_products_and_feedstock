import { NestFactory } from '@nestjs/core';

import { ProductsModule } from './modules/products.module';
import { PORT } from './configs/config';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(PORT, () => console.log(`Server runner in http://localhost:${PORT}`));
}
bootstrap();
