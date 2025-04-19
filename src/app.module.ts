import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';

dotenv.config();

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      process.env.DB_URL,
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',     // or your DB host
      port: 5432,
      username: 'nestuser',
      password: 'nestpass',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // disable in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
