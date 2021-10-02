import { Route, Controller, Post, Body, Get, Path, Put, Delete } from "tsoa";
import { CreateTeachings, Teachings, UpdateTeachings } from "./teachings";

@Route("teachings")
export class TeachingsController extends Controller {

    @Post()
    public async create(@Body() requestBody: CreateTeachings)
    : Promise<Teachings> {
        return new TeachingsService().create(requestBody);
    }

    @Get()
    public async getAll(): Promise<Teachings[]> {
        return new TeachingsService().getAll();
    }
    
    @Get("{id}")
    public async getById(@Path() id: number) : Promise<Teachings>{
        return new TeachingsService().getById(id);
    }

    @Put("{id}")
    public async update(@Path() id: number, @Body() requestBody : UpdateTeachings) 
    : Promise<Teachings> {
        return new TeachingsService().update(requestBody, id);

    }

    @Delete("{id}")
    public async delete(@Path() id: number): Promise<void> {
        return new TeachingsService().delete(id);
    }

}