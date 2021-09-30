import { VendorEntity } from './vendor.entity';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';

@Module({
    imports: [
        SharedModule,
        TypeOrmModule.forFeature([VendorEntity]),

    ],
    controllers: [VendorController],
    providers: [VendorService]
})
export class VendorModule {
    constructor(
        private readonly httpService: HttpService,
    ) { }

}
