import { Route, Controller, Post, Body, Get, Path, Put, Delete } from "tsoa";
import { CreateInventory, Inventory, UpdateInventory } from "./inventory";

@Route("inventory")
export class InventoryController extends Controller {

    @Post()
    public async create(@Body() requestBody: CreateInventory)
    : Promise<Inventory> {
        return new InventoryService().create(requestBody);
    }

    @Get()
    public async getAll(): Promise<Inventory[]> {
        return new InventoryService().getAll();
    }
    
    @Get("{id}")
    public async getById(@Path() id: number) : Promise<Inventory>{
        return new InventoryService().getById(id);
    }

    @Put("{id}")
    public async update(@Path() id: number, @Body() requestBody : UpdateInventory) 
    : Promise<Inventory> {
        return new InventoryService().update(requestBody, id);

    }

    @Delete("{id}")
    public async delete(@Path() id: number): Promise<void> {
        return new InventoryService().delete(id);
    }

}