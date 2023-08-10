import { Module } from '@nestjs/common';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingSchema } from './meeting.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Meeting', schema: MeetingSchema }]),
  ],
  controllers: [MeetingsController],
  providers: [MeetingsService],
})
export class MeetingsModule {}
