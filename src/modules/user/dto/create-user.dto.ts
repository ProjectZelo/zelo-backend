import { UserAddress } from './../user.interface';


export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    address: UserAddress;
}