import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import * as mongoose from 'mongoose';

export type BooksDocument = Books & Document;
export const BOOKS_MODEL_NAME = 'Books';
export const BOOKS_COLLECTION_NAME = 'books';

@Schema({ collection: BOOKS_COLLECTION_NAME })
export class Books {
  @Transform(({ value }) => value.toString())
  _id: mongoose.ObjectId;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  published: string;
}

export const BooksSchema = SchemaFactory.createForClass(Books);
