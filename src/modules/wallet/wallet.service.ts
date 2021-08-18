import { ENDPOINTS } from './../shared/service-end-points';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { configService } from 'config/config.service';
import { CreateWalletDto, GenerateAddressDto } from './dto/create-wallet.dto';
import { WalletResponse } from './wallet.interface';
import { WalletEntity } from './wallet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs';

@Injectable()
export class WalletService {

  constructor(@InjectRepository(WalletEntity)
  private readonly walletRepository: Repository<WalletEntity>,
    private httpService: HttpService) {

  }

  async createWallet(createWalletDto: CreateWalletDto): Promise<void> {
    // TODO :  Call sandbox circle
    const createWalletUrl = configService.getCirleDomainUrl() + ENDPOINTS.wallet;
    const response = await this.httpService.post(createWalletUrl, createWalletDto);
    response.pipe(map(x => x.data)).subscribe({
      next: (v: WalletResponse) => {
        const walletEntity = new WalletEntity();
        walletEntity.circleWalletId = v.data.walletId;
        walletEntity.userId = createWalletDto.userId;
        this.walletRepository.save(walletEntity);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  getWalletDetails(id: string): void {
    // TODO :  Call sandbox circle
  }

  generateAddress(generateAddtessDto: GenerateAddressDto) {

  }

  assignWalletToUser() {
    // TODO: Create after creating user Module
  }
}
