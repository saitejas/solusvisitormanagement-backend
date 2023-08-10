import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingsModule } from './meetings/meetings.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Saitejas:dWSHK86bnJDF6DAh@cluster0.1pile.mongodb.net/solusvisitormanagement?retryWrites=true&w=majority',
    ),
    MeetingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
