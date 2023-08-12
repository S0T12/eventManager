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
    const { password, ...rest } = createUserDto;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = this._userRepository.create({
      password: hashPassword,
      ...rest,
    });
    return this._userRepository.save(user);
  }

  findAll() {
    return this._userRepository.find();
  }

  findOne(id: number) {
    return this._userRepository.findOne({ where: { id } });
  }

  getByCellphone(cellPhone: string) {
    return this._userRepository.findOne({ where: { cellphone: cellPhone } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this._userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this._userRepository.delete(id);
  }
}
