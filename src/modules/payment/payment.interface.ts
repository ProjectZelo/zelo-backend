

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

enum TxnType {
    'payment',
    'payout'
}

enum TxnStatus {
    'pending'
}



