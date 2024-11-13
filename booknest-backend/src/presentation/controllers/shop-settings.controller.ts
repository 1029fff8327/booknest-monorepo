import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ShopSettingsService } from 'src/application/services/shop-settings.service';
import { CreateShopSettingsDto } from 'src/application/dto/shop-settings/create-shop-settings.dto';
import { UpdateShopSettingsDto } from 'src/application/dto/shop-settings/update-shop-settings.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('shop-settings')
@Controller('shop-settings')
export class ShopSettingsController {
  constructor(private readonly shopSettingsService: ShopSettingsService) {}

  @Get()
  @ApiOperation({ summary: 'Get shop settings' })
  @ApiResponse({ status: 200, description: 'Return shop settings' })
  findOne() {
    return this.shopSettingsService.findOne();
  }

  @Post()
  @ApiOperation({ summary: 'Create shop settings' })
  @ApiResponse({
    status: 201,
    description: 'The shop settings have been created',
  })
  create(@Body() createShopSettingsDto: CreateShopSettingsDto) {
    return this.shopSettingsService.create(createShopSettingsDto);
  }

  @Put()
  @ApiOperation({ summary: 'Update shop settings' })
  @ApiResponse({
    status: 200,
    description: 'The shop settings have been updated',
  })
  update(@Body() updateShopSettingsDto: UpdateShopSettingsDto) {
    return this.shopSettingsService.update(updateShopSettingsDto);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete shop settings' })
  @ApiResponse({
    status: 200,
    description: 'The shop settings have been deleted',
  })
  delete() {
    return this.shopSettingsService.delete();
  }

  @Post('transfer')
  @ApiOperation({ summary: 'Transfer shop to a new account' })
  @ApiResponse({ status: 200, description: 'The shop has been transferred' })
  transfer(@Body() body: { newAccount: string }) {
    return this.shopSettingsService.transfer(body.newAccount);
  }
}
