import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('verifyEmployee')
  async verifyEmployee(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const response = await this.authenticationService.verifyEmployee(
      email,
      password,
    );
    if (response) {
      return {
        message: 'Login Successful',
      };
    } else {
      throw new HttpException(
        'Invalid User Credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Post('verifySecurity')
  async verifySecurity(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const response = await this.authenticationService.verifySecurity(
      email,
      password,
    );
    if (response) {
      return {
        message: 'Login Successful',
      };
    } else {
      throw new HttpException(
        'Invalid User Credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
