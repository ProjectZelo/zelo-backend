import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('card')
export class CardEntity {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ default: '' })
    last4Digit: string;

    @ManyToOne(type => UserEntity, user => user.id)
    @JoinColumn({ name: "userId" })  // This matches @PrimaryColumn name
    userId: string;

}