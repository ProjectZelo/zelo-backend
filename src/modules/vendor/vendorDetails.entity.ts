import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vendor_details')
export class VendorDetailsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vendorName: string;

    @Column()
    partnerToken: string;

}