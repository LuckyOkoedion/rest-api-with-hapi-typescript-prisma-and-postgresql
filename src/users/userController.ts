import { Route, Controller, Post, Body, Get, Path, Put, Delete } from "tsoa";
import { CreateUser, User, UpdateUser } from "./user";

@Route("users")
export class UsersController extends Controller {

    @Post()
    public async create(@Body() requestBody: CreateUser)
    : Promise<User> {
        return new UsersService().create(requestBody);
    }

    @Get()
    public async getAll(): Promise<User[]> {
        return new UsersService().getAll();
    }
    
    @Get("{id}")
    public async getById(@Path() id: number) : Promise<User>{
        return new UsersService().getById(id);
    }

    @Put("{id}")
    public async update(@Path() id: number, @Body() requestBody : UpdateUser) 
    : Promise<User> {
        return new UsersService().update(requestBody, id);

    }

    @Delete("{id}")
    public async delete(@Path() id: number): Promise<void> {
        return new UsersService().delete(id);
    }

}