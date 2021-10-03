export interface Inventory {
    id: number;
    name: string;
    description: string;
    dateAcquired: string;
    initialValue: any;
    calculatedDepreciation: any;
    currentLocation: string;
    inWhoseCustody: number;
    custodyApprovedBy: number;

}

export interface CreateInventory {
    name: string;
    description: string;
    dateAcquired: string;
    initialValue: any;
    calculatedDepreciation: any;
    currentLocation: string;
    inWhoseCustody: number;
    custodyApprovedBy: number;

}

export interface UpdateInventory {
    name?: string;
    description?: string;
    dateAcquired?: string;
    initialValue?: any;
    calculatedDepreciation?: any;
    currentLocation?: string;
    inWhoseCustody?: number;
    custodyApprovedBy?: number;

}