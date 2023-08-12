import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard } from '../auth/jwt-guard/jwt-guard.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: 'hello world',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthGuard, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
