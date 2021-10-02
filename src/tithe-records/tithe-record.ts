export interface TitheRecords {
    id: number;
    date: string;
    user: number;
    amount: number;
}

export interface CreateTitheRecords {
    date: string;
    user: number;
    amount: number;
}

export interface UpdateTitheRecords {
    date?: string;
    user?: number;
    amount?: number;
}