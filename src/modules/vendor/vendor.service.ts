
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { VendorTokenEntity } from './vendorToken.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVendorToken, AddVendor } from './dto/vendor.dto';
import { VendorDetailsEntity } from './vendorDetails.entity';

@Injectable()
export class VendorService {

  constructor(@InjectRepository(VendorTokenEntity)
  private readonly vendorTokenRepository: Repository<VendorTokenEntity>,
    @InjectRepository(VendorDetailsEntity) private vendorDtlsRepository: Repository<VendorDetailsEntity>,
    private httpService: HttpService) {

  }

  createVendorToken(venderTokenDto: CreateVendorToken) {
    this.vendorTokenRepository.save(venderTokenDto);
  }

  addVendor(addVendor: AddVendor) {
    this.vendorDtlsRepository.save(addVendor);
  }

  getVendorToken(vendor: string, userId: number) {
    this.vendorTokenRepository.find({
      where: [
        { vendor: vendor, userId: userId }
      ]
    });
  }



}
