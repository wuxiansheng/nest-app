import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe自动验证
  app.useGlobalPipes(new ValidationPipe());
  // swagger
  const options = new DocumentBuilder()
  .setTitle('NEST RESTFULL API')
  .setDescription('this is a nest api description')
  .setVersion('1.0')
  .addTag('api')
  .build;
  // @ts-ignore
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/restful', app, document);
  app.use(helmet());
  // app.use(csurf({ cookie: true }));
  app.enableCors();
  app.use(compression());
  await app.listen(3000);
}
bootstrap();
