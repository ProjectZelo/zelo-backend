


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

enum CARD_TYPE {
    VISA = 'VISA',
    MASTERCARD = 'MASTERCARD'
}


enum CARD_STATUS {
    pending = 'pending'
}

interface CreateCardResponse {
    billingDetails: BillingDetails,
    createDate: string,
    expMonth: number,
    expYear: number,
    id: string,
    issuerCountry: string,
    last4: string,
    metadata: MetaData,
    network: CARD_TYPE,
    status: CARD_STATUS,
    updateDate: string

}