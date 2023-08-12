import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  caellphone: string;

  @IsString()
  password: string;
}
