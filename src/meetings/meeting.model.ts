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
  fromDateTime: Number,
  toDateTime: Number,
  toMeet: String,
});

export interface Meeting extends mongoose.Document {
  visitorType: string;
  visitorName: string;
  mobileNumber: number;
  emailId: string;
  gender: string;
  bloodGroup: string;
  visitorStatus: string;
  meetingStatus: string;
  toMeet: string;
  fromDateTime: number;
  toDateTime: number;
}
