import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksSchema, BOOKS_MODEL_NAME } from './schemas/books.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: BOOKS_MODEL_NAME,
      schema: BooksSchema,
    }]),
    TypeOrmModule.forFeature([Book])
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
