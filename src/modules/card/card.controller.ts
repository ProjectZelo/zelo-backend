import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {

  }

  @Post('card')
  createCard(@Body() createCardDto: CreateCardDto) {
    return this.cardService.createCard(createCardDto);
  }


}