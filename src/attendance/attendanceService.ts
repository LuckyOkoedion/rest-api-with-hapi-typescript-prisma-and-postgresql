import { Attendance, UpdateAttendance } from "./attendance";
import { PrismaClient } from ".prisma/client";

export type AttendanceCreationParams = Pick<
    Attendance,
    "id" |
    "eventName" |
    "date" |
    "user"
>

export class AttendanceService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: AttendanceCreationParams): Promise<Attendance> {

        try {

            return await this.prisma.attendance.create({
                data: {
                    eventName: theDto.eventName,
                    date: theDto.date,
                    user: theDto.user
                }
            });

        } catch (error) {
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

    public async getById(id: number): Promise<Attendance> {

        try {

            return await this.prisma.attendance.findUnique({
                where: {
                    id
                }
            });

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async getAll(): Promise<Attendance[]> {

        try {

            return await this.prisma.attendance.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: UpdateAttendance, id: number): Promise<Attendance> {

        try {

            return await this.prisma.attendance.update({
                where: {
                    id: id
                },
                data: {
                    ...theDto
                }
            })

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async delete(id: number): Promise<Attendance> {

        try {

            return await this.prisma.attendance.delete({
                where: {
                    id
                }
            });

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }


}