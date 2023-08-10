import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { MeetingDTO } from './meeting.dto';
import { Meeting } from './meeting.model';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingService: MeetingsService) {}

  @Post()
  async createMeeting(@Body() createMeetingDto: MeetingDTO) {
    const response = this.meetingService.createMeeting(createMeetingDto);
    return response;
  }

  @Get()
  getAllMeetings() {
    const allMeetings = this.meetingService.fetchMeetings();
    return allMeetings;
  }

  @Patch(':id')
  async updateMeeting(
    @Param('id') id: string,
    @Body() updatedMeetingParam: MeetingDTO,
  ) {
    const response = await this.meetingService.updateMeeting(
      id,
      updatedMeetingParam as Meeting,
    );
    return response;
  }

  @Delete(':id')
  async deleteMeeting(@Param('id') id: string) {
    const response = await this.meetingService.deleteMeeting(id);
    return response;
  }
}
