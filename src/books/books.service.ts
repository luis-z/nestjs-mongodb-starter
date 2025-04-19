import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BooksDocument, BOOKS_MODEL_NAME } from './schemas/books.schema';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private usersRepository: Repository<Book>,
  ) {}

  async findAll() : Promise<Book[]> {
    return await this.usersRepository.find();
  }

  async findOne (id: number): Promise<Book> {
    return await this.usersRepository.findOne({
      where: { id },
    })
  }

  async create ( createBookDto: CreateBookDto ) : Promise<CreateBookDto>{
    await this.usersRepository.insert(createBookDto);
    return createBookDto;
  }

  async update(id: number, payload: UpdateBookDto) : Promise<UpdateBookDto> {
    const updatedNote = await this.usersRepository.update(
      {id},
      {...payload}
    );

    if (!updatedNote) {
      throw new NotFoundException('Note not found');
    }

    return payload;
  }
   
  async remove(id: number) : Promise<void> {
    await this.usersRepository.delete({id})
  }
}
