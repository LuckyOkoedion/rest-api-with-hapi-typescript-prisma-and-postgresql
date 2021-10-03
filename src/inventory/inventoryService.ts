import { PrismaClient, Inventory } from "@prisma/client";
import { CreateInventory, UpdateInventory } from "./inventory";

export class InventoryService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: CreateInventory): Promise<Inventory> {

        try {

            return await this.prisma.inventory.create({
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

    public async getById(id: number): Promise<Inventory> {

        try {

            return await this.prisma.inventory.findUnique({
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

    public async getAll(): Promise<Inventory[]> {

        try {

            return await this.prisma.inventory.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: UpdateInventory, id: number): Promise<Inventory> {

        try {

            return await this.prisma.inventory.update({
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

    public async delete(id: number): Promise<Inventory> {

        try {

            return await this.prisma.inventory.delete({
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