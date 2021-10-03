import { PrismaClient } from "@prisma/client";
import { AttendanceSum, CreateAttendanceSum, UpdateAttendanceSum } from "./attendance-sum";

export class AttendanceSumService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: CreateAttendanceSum): Promise<AttendanceSum> {

        try {

            return await this.prisma.attendanceSum.create({
                data: {
                    eventName: theDto.eventName,
                    date: theDto.date,
                    totalChildren: theDto.totalChildren,
                    totalFemale: theDto.totalFemale,
                    totalMale: theDto.totalMale
                }
            });

        } catch (error) {
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

    public async getById(id: number): Promise<AttendanceSum> {

        try {

            return await this.prisma.attendanceSum.findUnique({
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

    public async getAll(): Promise<AttendanceSum[]> {

        try {

            return await this.prisma.attendanceSum.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: UpdateAttendanceSum, id: number): Promise<AttendanceSum> {

        try {

            return await this.prisma.attendanceSum.update({
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

    public async delete(id: number): Promise<AttendanceSum> {

        try {

            return await this.prisma.attendanceSum.delete({
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