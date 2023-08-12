import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  cellphone: string;

  @IsString()
  password: string;
}
