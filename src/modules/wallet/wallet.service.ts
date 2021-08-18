
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateWalletDto, GenerateAddressDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletService {

  constructor(private httpService: HttpService) {

  }

  async createWallet(createWalletDto: CreateWalletDto): Promise<void> {
    // TODO :  Call sandbox circle
    const response = await this.httpService.get('https://api.github.com/users/paztek').toPromise();


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
