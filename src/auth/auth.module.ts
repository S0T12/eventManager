import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstant } from './constants';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({ global: true, secret: jwtConstant.secret }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtService],
  exports: [AuthModule, JwtService],
})
export class AuthModule {}
