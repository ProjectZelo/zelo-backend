import { UserEntity } from './../user/user.entity';
import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, TableExclusion, TableColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('wallet')
export class WalletEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => UserEntity, user => user.id)
    @JoinColumn({ name: "userId" })  // This matches @PrimaryColumn name
    userId: string;

    @Column()
    circleWalletId: string;

    // add balances here

}