
import { IsNotEmpty } from 'class-validator';

export class CreateCardDto {
    /**
     * Unique idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
     */
    @IsNotEmpty()
    readonly idempotencyKey: string;

    @IsNotEmpty()
    readonly billingDetails: BillingDetails;

    /**
     * PGP encrypted json string. The object format given here needs to be stringified and PGP 
     * encrypted before it is sent to the server, so encryptedData will end up as a string, 
     * rather than an object.
     */
    @IsNotEmpty()
    readonly encryptedData: string

    @IsNotEmpty()
    readonly expMonth: number;

    @IsNotEmpty()
    readonly expYear: number;

    @IsNotEmpty()
    readonly metaData: MetaData

    @IsNotEmpty()
    readonly keyId: string;

    @IsNotEmpty()
    readonly userId: number;


}