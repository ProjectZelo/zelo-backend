import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {

  }

  @Post()
  createCard(@Body() createCardDto: CreateCardDto) {
    return this.cardService.createCard(createCardDto);
  }


}