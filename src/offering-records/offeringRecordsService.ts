import { PrismaClient, OfferingRecords } from "@prisma/client";
import { CreateOfferingRecords, UpdateOfferingRecords } from "./offering-records";

export class OfferingRecordsService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: CreateOfferingRecords): Promise<OfferingRecords> {

        try {

            return await this.prisma.offeringRecords.create({
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

    public async getById(id: number): Promise<OfferingRecords> {

        try {

            return await this.prisma.offeringRecords.findUnique({
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

    public async getAll(): Promise<OfferingRecords[]> {

        try {

            return await this.prisma.offeringRecords.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: UpdateOfferingRecords, id: number): Promise<OfferingRecords> {

        try {

            return await this.prisma.offeringRecords.update({
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

    public async delete(id: number): Promise<OfferingRecords> {

        try {

            return await this.prisma.offeringRecords.delete({
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