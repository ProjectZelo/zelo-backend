
import { IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
    /**
     * Unique idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
     */
    @IsNotEmpty()
    readonly idempotencyKey: string;

    /**
     * Unique identifier of the public key used in encryption. Only required if request object includes encrypted data.
     */
    readonly keyId: string;

    @IsNotEmpty()
    readonly metaData: MetaData;

    @IsNotEmpty()
    readonly amount: Amount;

    @IsNotEmpty()
    readonly verification: Verification;

    readonly description: string;

    /**
     * PGP encrypted json string. The object format given here needs to be stringified and PGP 
     * encrypted before it is sent to the server, so encryptedData will end up as a string, 
     * rather than an object.
     */
    @IsNotEmpty()
    readonly encryptedData: string

    @IsNotEmpty()
    readonly source: Source

    @IsNotEmpty()
    readonly userId: number;
}


export interface CreatePaymentTxnDto {
    circleTxnId: string;
    txnType: TXN_TYPE;
    merchantId: string;
    merchantWalletId: string;
    amount: string;
    currency: Currency;
    source: Source;
    description: string;
    status: TXN_STATUS;
}