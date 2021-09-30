
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { VendorEntity } from './vendor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVendorToken } from './dto/vendor.dto';

@Injectable()
export class VendorService {

  constructor(@InjectRepository(VendorEntity)
  private readonly vendorRepository: Repository<VendorEntity>,
    private httpService: HttpService) {

  }

  createVendorToken(venderTokenDto: CreateVendorToken) {
    this.vendorRepository.save(venderTokenDto);
  }

  getVendorToken(vendor: string, userId: number) {
    this.vendorRepository.find({
      where: [
        { vendor: vendor, userId: userId }
      ]
    });
  }



}
