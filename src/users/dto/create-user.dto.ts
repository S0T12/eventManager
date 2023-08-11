import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  family: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;
}
