import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
    imports: [
        SharedModule
    ],
    controllers: [WalletController],
    providers: [WalletService]
})
export class WalletModule {
    constructor(
        private readonly httpService: HttpService,
    ) { }

}
