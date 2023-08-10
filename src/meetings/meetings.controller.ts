import { Body, Controller, Get, Post } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { MeetingDTO } from './meeting.dto';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingService: MeetingsService) {}

  @Post()
  createMeeting(@Body() createMeetingDto: MeetingDTO) {
    this.meetingService.createMeeting(createMeetingDto);
  }

  @Get()
  getAllMeetings() {
    const allMeetings = this.meetingService.fetchMeetings();
    return allMeetings;
  }
}
