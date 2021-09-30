
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVendorToken } from './dto/vendor.dto';
import { VendorService } from './vendor.service';

@Controller('vendor/token')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {

  }

  @Post()
  createVendorToken(@Body() createVendorToken: CreateVendorToken) {
    this.vendorService.createVendorToken(createVendorToken);
  }

  @Get()
  getWalletDetails(@Param() params) {
    this.vendorService.getVendorToken(params.vendor, params.userId)
  }
}

