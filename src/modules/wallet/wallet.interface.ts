
export enum CryptoCurrency {
    ETH = 'ETH',
    USDC = 'USDC',
    BTC = 'BTC'
}

export enum BlockchainNetwork {
    'ETH',
    'SOL',
    'BTC'
}

export interface WalletResponse {
    data: WalletInfo
}

export interface WalletInfo {

    walletId: string,
    entityId: string,
    type: string,
    description: string
    balances: any // model this correctly later

}

export enum TXN_STATUS {
    initial = 'initial',
    pending = 'pending',
    confirmed = 'confirmed'
}