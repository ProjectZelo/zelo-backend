import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column({ default: '' })
    bio: string;

    @Column({ default: '' })
    image: string;

    @Column({ default: '' })
    addressLine1: string;

    @Column({ default: '' })
    addressLine2: string;

    @Column({ default: '' })
    province: string;

    @Column({ default: '' })
    state: string;

    @Column({ default: '' })
    city: string;

    @Column({ default: '' })
    postalCode: string;

    @Column({ default: '' })
    country: string;

}