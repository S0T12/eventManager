import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDateString()
  @IsNotEmpty()
  eventDate: string;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;
}
