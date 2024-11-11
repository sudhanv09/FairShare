export type Room = {
    id: string;
    name: string;
    currency: string;
    members: Member[]
    transactions: Entry[]
    created: Date;
}

export type Member = {
    name: string;
    email?: string;
    entries: Entry[]
    balance: number;
}

export type Entry = {
    amount: number;
    description?: string;
    payer: Member;
    payees: Member[]
    timestamp: Date;
}