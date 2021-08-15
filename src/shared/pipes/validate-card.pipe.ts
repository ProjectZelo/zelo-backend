

import { PipeTransform, ArgumentMetadata, BadRequestException, HttpStatus, Injectable } from '@nestjs/common';


@Injectable()
export class ValidateCardPipe implements PipeTransform<any> {
    async transform(cardNumber, metadata: ArgumentMetadata) {

        if (!cardNumber) {
            throw new BadRequestException('No card submitted');
        }

        cardNumber = cardNumber.split(' ').join("");
        if (parseInt(cardNumber) <= 0 || (!/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber)) || cardNumber.length > 16) {
            return false;
        }
        var carray = new Array();
        for (var i = 0; i < cardNumber.length; i++) {
            carray[carray.length] = cardNumber.charCodeAt(i) - 48;
        }
        carray.reverse();
        var sum = 0;
        for (var i = 0; i < carray.length; i++) {
            var tmp = carray[i];
            if ((i % 2) != 0) {
                tmp *= 2;
                if (tmp > 9) {
                    tmp -= 9;
                }
            }
            sum += tmp;
        }
        return ((sum % 10) == 0);
    }
}