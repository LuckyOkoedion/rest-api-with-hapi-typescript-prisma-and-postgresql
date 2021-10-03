export interface AttendanceSum {
    id: number;
    eventName: string;
    date: string;
    totalMale: number;
    totalFemale: number;
    totalChildren: number;

}

export interface CreateAttendanceSum {
    eventName: string;
    date: string;
    totalMale: number;
    totalFemale: number;
    totalChildren: number;

}

export interface UpdateAttendanceSum {
    eventName?: string;
    date?: string;
    totalMale?: number;
    totalFemale?: number;
    totalChildren?: number;

}