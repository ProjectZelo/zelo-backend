

interface Amount {
    amount: number,
    currency: Currency
}

interface Source {
    id: string,
    type: SourceType
}

enum Currency {
    'USD',
    'EUR',
    'INR'
}

enum Verification {
    'none',
    'three_d_secure',
    'cvv'
}

enum SourceType {
    'card',
    'ach'
}

enum TXN_TYPE {
    'payment',
    'payout'
}

enum TXN_STATUS {
    pending = 'pending',
    confirmed = 'confirmed'
}

interface CreatePaymentResponse {
    amount: Amount,
    createDate: string,
    updateDate: string,
    description: "safsdf"
    id: string,
    merchantId: string
    merchantWalletId: string,
    metadata: MetaData,
    source: Source,
    status: TXN_STATUS
    type: string

}



