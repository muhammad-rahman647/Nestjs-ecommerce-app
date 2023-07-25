import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ItemDTO {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class ItemDTOClass {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}
