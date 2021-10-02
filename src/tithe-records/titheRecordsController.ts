import { Route, Controller, Post, Body, Get, Path, Put, Delete } from "tsoa";
import { CreateTitheRecords, TitheRecords, UpdateTitheRecords } from "./tithe-record";

@Route("tithe-records")
export class TitheRecordsController extends Controller {

    @Post()
    public async create(@Body() requestBody: CreateTitheRecords)
    : Promise<TitheRecords> {
        return new TitheRecordsService().create(requestBody);
    }

    @Get()
    public async getAll(): Promise<TitheRecords[]> {
        return new TitheRecordsService().getAll();
    }
    
    @Get("{id}")
    public async getById(@Path() id: number) : Promise<TitheRecords>{
        return new TitheRecordsService().getById(id);
    }

    @Put("{id}")
    public async update(@Path() id: number, @Body() requestBody : UpdateTitheRecords) 
    : Promise<TitheRecords> {
        return new TitheRecordsService().update(requestBody, id);

    }

    @Delete("{id}")
    public async delete(@Path() id: number): Promise<void> {
        return new TitheRecordsService().delete(id);
    }

}