import { ENDPOINTS } from './../shared/service-end-points';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { configService } from 'config/config.service';
import { CreateWalletDto, GenerateAddressDto, UpdateWalletDto } from './dto/wallet.dto';
import { WalletResponse } from './wallet.interface';
import { WalletEntity } from './wallet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { map, Observable } from 'rxjs';

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
    response.pipe(map(x => x.data?.data)).subscribe({
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

  async updateWallet(updateWalletDto: UpdateWalletDto): Promise<WalletEntity> {
    const walletRow = await this.walletRepository.findOneOrFail(updateWalletDto.id);
    if (!walletRow.id) {
      console.error("Wallet doesn't exist");
    }
    const updatedWalletEntity = new WalletEntity();
    this.walletRepository.update(updateWalletDto.id, updatedWalletEntity);
    return await this.walletRepository.findOne(updateWalletDto.id);
  }

  getUserWallet(userId: number): Promise<WalletEntity> {
    return this.walletRepository.createQueryBuilder("wallet")
      .where("wallet.userId = :id", { id: userId })
      .getOne();
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
