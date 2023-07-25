// export class CreateProductDTO {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
// }

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  category: string;
}
