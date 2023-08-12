import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
<<<<<<< HEAD
    const User = this._userRepository.create(createUserDto);
    return await this._userRepository.save(User);
=======
    const { password, ...rest } = createUserDto;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = this._userRepository.create({
      password: hashPassword,
      ...rest,
    });
    return this._userRepository.save(user);
>>>>>>> 93379fa86e28ddf0b4e03efd59e85a561c8ef2dd
  }

  async findAll() {
    return await this._userRepository.find();
  }

  async findOne(id: number) {
    return await this._userRepository.findOne({ where: { id } });
  }

  async getByCellphone(cellPhone: string) {
    return await this._userRepository.findOne({
      where: { cellphone: cellPhone },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this._userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this._userRepository.delete(id);
  }
}
