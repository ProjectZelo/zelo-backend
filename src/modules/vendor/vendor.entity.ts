import { UserEntity } from '../user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, TableExclusion } from 'typeorm';

@Entity('vendor')
export class VendorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vendorName: string;

    @Column()
    tokenId: string;

    @OneToOne(type => UserEntity, user => user.id)
    @JoinColumn({ name: "userId" })  // This matches @PrimaryColumn name
    userId: number;

}