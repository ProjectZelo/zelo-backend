import { CardService } from './card.service';
import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';

@Module({
    imports: [
        SharedModule,
        TypeOrmModule.forFeature([CardEntity]),
    ],
    controllers: [CardController],
    providers: [CardService],
})
export class CardModule {


}
