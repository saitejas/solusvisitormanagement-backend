import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  async verifyEmployee() {
    return true;
  }

  async verifySecurity() {
    return true;
  }
}
