import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthenticationService {
  constructor(private configService: ConfigService) {}

  async verifyEmployee(email: string, password: string) {
    const emailToBeVerifiedWith =
      this.configService.get<string>('EMPLOYEE_EMAIL');
    const passwordToBeVerifiedWith =
      this.configService.get<string>('EMPLOYEE_PASSWORD');
    if (
      emailToBeVerifiedWith === email &&
      passwordToBeVerifiedWith === password
    ) {
      return {
        statusCode: 200,
        message: 'Login successful',
        // token: userToken,
      };
    } else {
      throw new UnauthorizedException('Invalid user credentials');
    }
  }

  async verifySecurity(email: string, password: string) {
    const emailToBeVerifiedWith =
      this.configService.get<string>('SECURITY_EMAIL');
    const passwordToBeVerifiedWith =
      this.configService.get<string>('SECURITY_PASSWORD');
    if (
      emailToBeVerifiedWith === email &&
      passwordToBeVerifiedWith === password
    ) {
      return {
        statusCode: 200,
        message: 'Login successful',
        // token: userToken,
      };
    } else {
      throw new UnauthorizedException('Invalid user credentials');
    }
  }
}
