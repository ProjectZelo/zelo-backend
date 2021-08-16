import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    @IsEmail()
    email: string;

    @Column({ default: '' })
    bio: string;

    @Column({ default: '' })
    image: string;

}