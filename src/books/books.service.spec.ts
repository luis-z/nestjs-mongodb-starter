import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { Model } from 'mongoose';
import { BOOKS_MODEL_NAME, BooksDocument } from './schemas/books.schema';
import { getModelToken } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/create-book.dto';

describe('BooksService', () => {
  let service: BooksService;
  let model: Model<BooksDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(BOOKS_MODEL_NAME),
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    model = module.get<Model<BooksDocument>>(getModelToken(BOOKS_MODEL_NAME));
  });

  it('should return an array of books', async () => {
    const books = [{ title: 'Test Book' }] as unknown as CreateBookDto;
    jest.spyOn(model, 'find').mockResolvedValueOnce(books as any);
    const result = await service.findAll();
    expect(result).toEqual(books);
  });
});
