import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MeetingDTO {
  @IsNotEmpty()
  @IsString()
  visitorType: string;

  @IsNotEmpty()
  @IsString()
  visitorName: string;

  @IsNotEmpty()
  @IsNumber()
  mobileNumber: number;

  @IsNotEmpty()
  @IsString()
  emailId: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  bloodGroup: string;

  @IsNotEmpty()
  @IsString()
  visitorStatus: string;

  @IsNotEmpty()
  @IsString()
  meetingStatus: string;

  @IsNotEmpty()
  @IsString()
  toMeet: string;

  @IsNotEmpty()
  @IsNumber()
  fromDateTime: number;

  @IsNotEmpty()
  @IsNumber()
  toDateTime: number;
}
