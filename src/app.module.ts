import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CalculatorService} from "./calculator.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CalculatorService],
})
export class AppModule {}
