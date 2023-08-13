import { BadRequestException, Injectable } from '@nestjs/common';
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

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.getByCellphone(createUserDto.cellphone);
    if (existingUser) {
      throw new BadRequestException('Cellphone number is already in use');
    }

    const { password, ...rest } = createUserDto;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = this._userRepository.create({
      password: hashPassword,
      ...rest,
    });

    return this._userRepository.save(user);
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
