import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({ global: true, secret: jwtConstant.secret }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
