import { BlockchainNetwork, CryptoCurrency } from "../wallet.interface";

export interface CreateWalletDto {
    userId: string,
    idempotencyKey: string,
    description: string
}

export interface GenerateAddressDto {
    walletId: string,
    idempotencyKey: string,
    currency: CryptoCurrency,
    chain: BlockchainNetwork
}