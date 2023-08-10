import * as mongoose from 'mongoose';

export const MeetingSchema = new mongoose.Schema({
  visitorType: String,
  visitorName: String,
  mobileNumber: Number,
  emailId: String,
  gender: String,
  bloodGroup: String,
  visitorStatus: String,
  meetingStatus: String,
  fromDateTime: Date,
  toDateTime: Date,
  toMeet: String,
});

export class Meeting {
  constructor(
    public visitorType: string,
    public visitorName: string,
    public mobileNumber: number,
    public emailId: string,
    public gender: string,
    public bloodGroup: string,
    public visitorStatus: string,
    public meetingStatus: string,
    public toMeet: string,
    public fromDateTime: Date,
    public toDateTime: Date,
  ) {}
}
