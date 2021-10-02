export interface Attendance {
    id: number;
    eventName: string;
    date: string;
    user: number;
}

export interface UpdateAttendance {
    eventName?: string;
    date?: string;
    user?: number;
}