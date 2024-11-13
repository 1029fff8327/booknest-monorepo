import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSettingDto {
  @ApiProperty({
    description: 'Key of the setting',
    example: 'themeColor',
  })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({
    description: 'Value of the setting',
    example: '#FFFFFF',
  })
  @IsString()
  @IsNotEmpty()
  value: string;
}
