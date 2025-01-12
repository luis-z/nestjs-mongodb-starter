import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BooksDocument, BOOKS_MODEL_NAME } from './schemas/books.schema';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  constructor(
    @InjectModel(BOOKS_MODEL_NAME) private readonly booksModel: Model<BooksDocument>,
  ) {}

  private books = [];

  async findAll() : Promise<BooksDocument[]> {
    return await this.booksModel.find();
  }

  async findOne (id: string) {
    return await this.booksModel.findById(id)
  }

  async create ( createBookDto: CreateBookDto ) : Promise<BooksDocument>{
    const book = await this.booksModel.create(createBookDto);
    return book;
  }

  async update(id: string, payload: UpdateBookDto) : Promise<BooksDocument> {
    const updatedNote = await this.booksModel.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (!updatedNote) {
      throw new NotFoundException('Note not found');
    }

    return updatedNote;
  }
   
  async remove(id: string) : Promise<void> {
    await this.booksModel.deleteOne({_id: id})
  }
}
