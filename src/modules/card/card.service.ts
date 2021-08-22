import { CardEntity } from './card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { configService } from 'config/config.service';
import { ENDPOINTS } from '../shared/service-end-points';
import { map } from 'rxjs';

@Injectable()
export class CardService {

  constructor(@InjectRepository(CardEntity)
  private readonly cardRepository: Repository<CardEntity>,
    private httpService: HttpService) {

  }

  async createCard(cardDetails: CreateCardDto) {

    // TODO :  Call sandbox circle to create card for the user
    const createCardUrl = configService.getCirleDomainUrl() + ENDPOINTS.cards;
    const response = await this.httpService.post(createCardUrl, cardDetails);
    response.pipe(map(x => x.data.data)).subscribe({
      next: (v: CreateCardResponse) => {
        const cardEntity = new CardEntity();
        cardEntity.billingDetails = JSON.stringify(v.billingDetails);
        console.log(v)
        cardEntity.circleCardId = v.id;
        cardEntity.last4Digit = v.last4;
        cardEntity.network = v.network;
        cardEntity.userId = cardDetails.userId;
        cardEntity.expMonth = v.expMonth;
        cardEntity.expYear = v.expYear;
        cardEntity.status = v.status;
        cardEntity.updatedDate = new Date(v.updateDate);
        cardEntity.createdDate = new Date(v.createDate);
        this.cardRepository.save(cardEntity);

      },
      error: (e) => console.error(e),
      complete: () => console.info('create card complete')
    })

  }

  updateCard() {

  }

  removeCard() {

  }
}


