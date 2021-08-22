import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('payment')
export class PaymentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    circlePaymentId: string;

    @Column()
    amount: number;

    @Column()
    sourceId: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;

    @Column()
    status: TXN_STATUS;


    @IsNotEmpty()
    @ManyToOne(type => UserEntity, user => user.id)
    @JoinColumn({ name: "userId" })  // This matches @PrimaryColumn name
    userId: number;

}