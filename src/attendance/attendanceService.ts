import { Attendance, UpdateAttendance } from "./attendance";

export type AttendanceCreationParams = Pick<
    Attendance,
    "id" |
    "eventName" |
    "date" |
    "user"
>

export class AttendanceService {

    public create(theDto: AttendanceCreationParams) : Attendance {
        
    }

    public getById(id: number) : Attendance {

    }

    public getAll() : Attendance[] {

    }

    public update(theDto: UpdateAttendance, id: number) : Attendance {

    }

    public delete(id: number) {

    }


}