import { BlockchainNetwork, CryptoCurrency } from "../wallet.interface";

export interface CreateWalletDto {
    userId: string,
    idempotencyKey: string,
    description: string
}
export interface UpdateWalletDto {
    id: string,
    userId: string,
    balance: number;
    status: TXN_STATUS;
    currency: CryptoCurrency;
}

export interface GenerateAddressDto {
    walletId: string,
    idempotencyKey: string,
    currency: CryptoCurrency,
    chain: BlockchainNetwork
}