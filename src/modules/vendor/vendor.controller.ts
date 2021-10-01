
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AddVendor, CreateVendorToken } from './dto/vendor.dto';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {

  }

  @Post('/token')
  createVendorToken(@Body() createVendorToken: CreateVendorToken) {
    console.log(createVendorToken)
    this.vendorService.createVendorToken(createVendorToken);
  }

  @Post()
  addVendor(@Body() addVendor: AddVendor) {
    console.log(addVendor)
    this.vendorService.addVendor(addVendor);
  }

  @Get()
  getWalletDetails(@Param() params) {
    this.vendorService.getVendorToken(params.vendor, params.userId)
  }

  @Get('/token')
  getPartnerToken(@Query() params) {
    console.log(params);
    return this.vendorService.getPartnerToken(params.vendorName);
  }
}

