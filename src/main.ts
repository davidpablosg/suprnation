import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApiModule } from './api/api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const servicePort = 3000;

  app.enableCors();

  const apiDocOptions = new DocumentBuilder()
    .setTitle('Public API')
    .setDescription('API providing functionality for React App')
    .setVersion('1.0')
    .build();
  const apiDoc = SwaggerModule.createDocument(app, apiDocOptions);

  SwaggerModule.setup('api', app, apiDoc);

  await app.init();

  await app
    .listen(servicePort)
    .then(() => {
      console.info(`Server is listening on http://localhost:${servicePort}`);
      console.info(
        `Api documentation is available on http://localhost:${servicePort}/api`,
      );
    })
    .catch(err => {
      console.error(err);
    });
}

bootstrap();
