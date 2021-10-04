export interface OfferingRecords {
    id: number;
    eventName: string;
    date: string;
    amount: any;
}


export interface CreateOfferingRecords {
    eventName: string;
    date: string;
    amount: any;
}


export interface UpdateOfferingRecords {
    eventName?: string;
    date?: string;
    amount?: any;
}

