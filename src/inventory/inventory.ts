export interface Inventory {
    id: number;
    name: string;
    description: string;
    dateAcquired: string;
    initialValue: number;
    calculatedDepreciation: number;
    currentLocation: string;
    inWhoseCustody: string;
    custodyApprovedBy: number;

}

export interface CreateInventory {
    name: string;
    description: string;
    dateAcquired: string;
    initialValue: number;
    calculatedDepreciation: number;
    currentLocation: string;
    inWhoseCustody: string;
    custodyApprovedBy: number;

}

export interface UpdateInventory {
    name?: string;
    description?: string;
    dateAcquired?: string;
    initialValue?: number;
    calculatedDepreciation?: number;
    currentLocation?: string;
    inWhoseCustody?: string;
    custodyApprovedBy?: number;

}