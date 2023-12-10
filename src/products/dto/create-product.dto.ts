import { IsString, IsNumberString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  image: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumberString()
  price: string;

  @IsString()
  color: string;
}
