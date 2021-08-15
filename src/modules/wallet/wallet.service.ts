
import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletService {

  createWallet(createWalletDto: CreateWalletDto): void {
    // TODO :  Call sandbox circle
  }

  getWalletDetails(): void {
    // TODO :  Call sandbox circle
  }
}
