import { PrismaClient, TitheRecords } from "@prisma/client";
import { CreateTitheRecords, UpdateTitheRecords } from "./tithe-record";

export class TitheRecordsService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: CreateTitheRecords): Promise<TitheRecords> {

        try {

            return await this.prisma.titheRecords.create({
                data: {
                    ...theDto
                }
            });

        } catch (error) {
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

    public async getById(id: number): Promise<TitheRecords> {

        try {

            return await this.prisma.titheRecords.findUnique({
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

    public async getAll(): Promise<TitheRecords[]> {

        try {

            return await this.prisma.titheRecords.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: UpdateTitheRecords, id: number): Promise<TitheRecords> {

        try {

            return await this.prisma.titheRecords.update({
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

    public async delete(id: number): Promise<TitheRecords> {

        try {

            return await this.prisma.titheRecords.delete({
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