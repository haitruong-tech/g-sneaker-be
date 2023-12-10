import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

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
  await app.listen(3001);
}
bootstrap();
