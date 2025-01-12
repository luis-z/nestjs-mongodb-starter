import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksSchema, BOOKS_MODEL_NAME } from './schemas/books.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: BOOKS_MODEL_NAME,
      schema: BooksSchema,
    }]),
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
