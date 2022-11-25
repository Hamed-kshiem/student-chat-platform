import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:rIZ5arJNG4qlTSbw@cluster0.my7gggd.mongodb.net/test'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
