import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateShopSettingsDto {
  @ApiProperty({
    example: 'example.com',
    description: 'Domain of the shop',
  })
  @IsString()
  @IsNotEmpty()
  domain: string;

  @ApiProperty({
    example: 'Example Shop',
    description: 'Name of the shop',
  })
  @IsString()
  @IsNotEmpty()
  shopName: string;
}
