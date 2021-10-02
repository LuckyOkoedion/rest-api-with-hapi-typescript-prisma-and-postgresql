export interface AttendanceSum {
    id: number;
    eventName: string;
    date: string;
    totalMale: string;
    totalFemale: string;
    totalChildren: string;

}

export interface CreateAttendanceSum {
    eventName: string;
    date: string;
    totalMale: string;
    totalFemale: string;
    totalChildren: string;

}

export interface UpdateAttendanceSum {
    eventName?: string;
    date?: string;
    totalMale?: string;
    totalFemale?: string;
    totalChildren?: string;

}