import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: process.env.AMQP_URL,
      queue: RabbitMQ.SoftwareQueue,
    },
  });
  await app.listen();
  console.log('Microservice Softwares is listening');
}
bootstrap();
