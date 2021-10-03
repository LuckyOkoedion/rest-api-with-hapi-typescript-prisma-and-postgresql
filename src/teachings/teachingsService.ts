import { PrismaClient, Teachings } from "@prisma/client";
import { CreateTeachings, UpdateTeachings } from "./teachings";

export class TeachingsService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: CreateTeachings): Promise<Teachings> {

        try {

            return await this.prisma.teachings.create({
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

    public async getById(id: number): Promise<Teachings> {

        try {

            return await this.prisma.teachings.findUnique({
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

    public async getAll(): Promise<Teachings[]> {

        try {

            return await this.prisma.teachings.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: UpdateTeachings, id: number): Promise<Teachings> {

        try {

            return await this.prisma.teachings.update({
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

    public async delete(id: number): Promise<Teachings> {

        try {

            return await this.prisma.teachings.delete({
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