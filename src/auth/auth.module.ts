import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({ global: true, secret: jwtConstant.secret }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
  exports: [AuthModule],
})
export class AuthModule {}
