import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meeting } from './meeting.model';
import { MeetingDTO } from './meeting.dto';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectModel('Meeting') private readonly meetingModel: Model<Meeting>,
  ) {}

  async createMeeting(meeting: MeetingDTO) {
    const newMeeting = new this.meetingModel(meeting);
    try {
      await newMeeting.save();
      return {
        statusCode: 201,
        message: 'Meeting scheduled successfully',
      };
    } catch {
      throw new InternalServerErrorException('Error while creating a meeting');
    }
  }

  async fetchMeetings() {
    const meetings = await this.meetingModel.find().exec();
    return meetings as Meeting[];
  }

  async findMeeting(id: string): Promise<Meeting> {
    let meeting;
    try {
      meeting = await this.meetingModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find meeting');
    }
    if (!meeting) {
      throw new NotFoundException('Could not find meeting');
    }
    return meeting;
  }

  async updateMeeting(id: string, updateMeetingObj: Meeting) {
    try {
      const meetingToBeUpdated = await this.findMeeting(id);

      meetingToBeUpdated.fromDateTime = updateMeetingObj.fromDateTime;
      meetingToBeUpdated.toDateTime = updateMeetingObj.toDateTime;
      meetingToBeUpdated.visitorStatus = updateMeetingObj.visitorStatus;
      meetingToBeUpdated.meetingStatus = updateMeetingObj.meetingStatus;
      meetingToBeUpdated.visitorName = updateMeetingObj.visitorName;
      meetingToBeUpdated.visitorType = updateMeetingObj.visitorType;
      meetingToBeUpdated.emailId = updateMeetingObj.emailId;
      meetingToBeUpdated.gender = updateMeetingObj.gender;
      meetingToBeUpdated.bloodGroup = updateMeetingObj.bloodGroup;
      meetingToBeUpdated.toMeet = updateMeetingObj.toMeet;

      meetingToBeUpdated.save();
      return {
        statusCode: 200,
        message: 'Meeting updated successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to update the meeting');
    }
  }

  async deleteMeeting(meetingId: string) {
    try {
      await this.meetingModel.deleteOne({ _id: meetingId }).exec();
      return {
        statusCode: 200,
        message: 'Meeting deleted successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the meeting');
    }
  }
}
