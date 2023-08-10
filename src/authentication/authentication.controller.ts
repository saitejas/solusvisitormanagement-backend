import { Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('verifyEmployee')
  async verifyEmployee() {
    const response = this.authenticationService.verifyEmployee();
    return response;
  }

  @Post('verifyEmployee')
  async verifySecurity() {
    const response = this.authenticationService.verifySecurity();
    return response;
  }
}
