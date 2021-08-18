import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000, //TODO: revisit these number
            maxRedirects: 5
        }),
    ]
})
export class WalletModule { }
