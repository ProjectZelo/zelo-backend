

interface BillingDetails {
    name: string,
    line1: string,
    line2: string,
    city: string,
    district: string,
    postalCode: string,
    country: string
}

interface MetaData {
    email: string,
    ipAddress: string,
    phoneNumber?: number, // Phone number of the user in E.164 format. We recommend using a library such as libphonenumber to parse and validate phone numbers.
    sessionId?: string // this will be created at the onset and sent to the client. Client will send this along with request
}

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



