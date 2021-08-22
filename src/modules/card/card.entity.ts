import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('card')
export class CardEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    circleCardId: string;

    @Column({ default: '' })
    last4Digit: string;

    @Column({ default: new Date() })
    createdDate: Date;

    @Column({ default: new Date() })
    updatedDate: Date;

    @Column()
    expMonth: number;

    @Column()
    expYear: number;

    @Column({ default: '' })
    issuerCountry: string;

    @Column()
    network: CARD_TYPE;

    @Column()
    status: CARD_STATUS;

    @Column({ default: '' })
    billingDetails: string; // clob

    @IsNotEmpty()
    @ManyToOne(type => UserEntity, user => user.id)
    @JoinColumn({ name: "userId" })  // This matches @PrimaryColumn name
    userId: number;

}