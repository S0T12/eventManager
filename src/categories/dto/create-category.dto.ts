import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsNumber()
  @IsNotEmpty()
  parentId: number;

  @IsNumber()
  @IsNotEmpty()
  order: number;
}
