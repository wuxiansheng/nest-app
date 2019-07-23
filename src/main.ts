import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger
  const options = new DocumentBuilder()
  .setTitle('NEST RESTFULL API')
  .setDescription('this is a nest api description')
  .setVersion('1.0')
  .addTag('api')
  .build;
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // app.use(helmet());
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
