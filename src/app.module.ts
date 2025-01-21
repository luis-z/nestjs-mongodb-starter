import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      process.env.DB_URL,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
