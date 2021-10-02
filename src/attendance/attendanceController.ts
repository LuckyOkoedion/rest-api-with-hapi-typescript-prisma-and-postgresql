import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { Attendance, UpdateAttendance } from "./attendance";
import { AttendanceCreationParams, AttendanceService } from "./attendanceService";


@Route("attendance")
export class AttendanceController extends Controller {

    @Post()
    public async create(@Body() requestBody: AttendanceCreationParams)
    : Promise<Attendance> {
        return new AttendanceService().create(requestBody);
    }

    @Get()
    public async getAll(): Promise<Attendance[]> {
        return new AttendanceService().getAll();
    }
    
    @Get("{id}")
    public async getById(@Path() id: number) : Promise<Attendance>{
        return new AttendanceService().getById(id);
    }

    @Put("{id}")
    public async update(@Path() id: number, @Body() requestBody : UpdateAttendance) 
    : Promise<Attendance> {
        return new AttendanceService().update(requestBody, id);

    }

    @Delete("{id}")
    public async delete(@Path() id: number): Promise<void> {
        return new AttendanceService().delete(id);
    }

}