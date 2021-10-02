export interface OfferingRecords {
    id: number;
    eventName: string;
    date: string;
    amount: string;
}


export interface CreateOfferingRecords {
    eventName: string;
    date: string;
    amount: string;
}


export interface UpdateOfferingRecords {
    eventName?: string;
    date?: string;
    amount?: string;
}

