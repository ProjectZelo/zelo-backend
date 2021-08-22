import { CreatePaymentDto, CreatePaymentTxnDto } from './dto/create-payment.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { PaymentEntity } from './payment.entity';
import { configService } from 'config/config.service';
import { ENDPOINTS } from '../shared/service-end-points';
import { map } from 'rxjs';

@Injectable()
export class PaymentService {

  constructor(@InjectRepository(PaymentEntity) readonly paymentRepository: Repository<PaymentEntity>,
    private httpService: HttpService) {

  }

  async createPayment(paymentDetails: CreatePaymentDto) {

    console.log('dto', paymentDetails);

    // TODO :  Call sandbox circle to create payment
    // TODO: call create payment txns after getting response from circle
    const createCardUrl = configService.getCirleDomainUrl() + ENDPOINTS.payments;
    const response = await this.httpService.post(createCardUrl, paymentDetails);
    response.pipe(map(x => x.data.data)).subscribe({
      next: (v: CreatePaymentResponse) => {

        const paymentEntity = new PaymentEntity();
        paymentEntity.amount = Number(v.amount?.amount);
        paymentEntity.createDate = new Date(v.createDate);
        paymentEntity.circlePaymentId = v.id;
        paymentEntity.sourceId = v.source.id;
        paymentEntity.status = v.status;
        paymentEntity.updateDate = new Date(v.updateDate);
        paymentEntity.userId = paymentDetails.userId;

        this.paymentRepository.save(paymentEntity);

        //TODO: after saving payment txn details we should map user to the balance
      },
      error: (e) => console.error(e),
      complete: () => console.info('create card complete')
    })
  }

  createPaymentTxn(paymentTxnDetails: CreatePaymentTxnDto): void {

    // TODO :  Call sandbox circle to create payment

  }
}


