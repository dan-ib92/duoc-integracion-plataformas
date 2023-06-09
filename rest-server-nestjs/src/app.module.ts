import { ApiCalculadoraModule } from './api-calculadora/api-calculadora.module';
import { LoggerModule } from 'nestjs-pino';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/http-logger.middleware';

@Module({
  imports: [ApiCalculadoraModule, LoggerModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
