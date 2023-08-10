import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meeting } from './meeting.model';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectModel('Meeting') private readonly MeetingModel: Model<Meeting>,
  ) {}

  async createMeeting(meeting: Meeting) {
    const newMeeting = new this.MeetingModel(meeting);
    try {
      await newMeeting.save();
    } catch {
      throw 'Error while creating a meeting';
    }
  }

  async fetchMeetings() {
    const meetings = await this.MeetingModel.find().exec();
    return meetings as Meeting[];
  }

  async updateMeeting(id: number) {
    return 'true';
  }

  async deletemeeting(id: number) {
    return 'true';
  }
}
