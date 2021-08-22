
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWalletDto } from './dto/wallet.dto';
import { WalletService } from './wallet.service';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {

  }

  @Post()
  createWallet(@Body() createWalletDto: CreateWalletDto) {
    console.log('create wall', createWalletDto)
    return this.walletService.createWallet(createWalletDto);
  }

  @Get('/:id')
  getWalletDetails(@Param() params) {
    return this.walletService.getWalletDetails(params.id);
  }
}
function Params() {
  throw new Error('Function not implemented.');
}

