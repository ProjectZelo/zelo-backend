import { CryptoCurrency, TXN_STATUS } from './wallet.interface';
import { UserEntity } from './../user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, TableExclusion } from 'typeorm';

@Entity('wallet')
export class WalletEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    circleWalletId: string;

    @Column({ default: CryptoCurrency.USDC })
    currency: CryptoCurrency;

    @Column({ default: 0 })
    balance: number;

    @Column({ default: TXN_STATUS.initial })
    status: TXN_STATUS;

    @OneToOne(type => UserEntity, user => user.id)
    @JoinColumn({ name: "userId" })  // This matches @PrimaryColumn name
    userId: number;

}