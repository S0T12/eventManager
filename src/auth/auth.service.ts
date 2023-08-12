import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(cellphone: string, password: string): Promise<any> {
    const user = await this.usersService.getByCellphone(cellphone);
    const match = await bcrypt.compare(password, user?.password || '');
    if (!user || !match) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.name, sub: user.cellphone };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
