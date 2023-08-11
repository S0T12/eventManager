import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(cellPhone: string, pass: string): Promise<any> {
    const user = await this.usersService.getByCellphone(cellPhone);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.cellphone };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
