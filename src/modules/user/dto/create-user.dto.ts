import { UserAddress } from './../user.interface';

import { IsNotEmpty } from 'class-validator';
import { Address } from 'cluster';

export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    address: UserAddress;
}