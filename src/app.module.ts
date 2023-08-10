import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingsModule } from './meetings/meetings.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Saitejas:dWSHK86bnJDF6DAh@cluster0.1pile.mongodb.net/solusvisitormanagement?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MeetingsModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
