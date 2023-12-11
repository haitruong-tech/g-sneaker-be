import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory(errors) {
        const response: Record<string, string> = errors.reduce((acc, error) => {
          const constraints = Object.values(error.constraints ?? {});
          acc[error.property] = constraints.join(',');
          return acc;
        }, {});
        return new BadRequestException(response);
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('G-Sneaker API')
    .setDescription('The G-Sneaker API description')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
