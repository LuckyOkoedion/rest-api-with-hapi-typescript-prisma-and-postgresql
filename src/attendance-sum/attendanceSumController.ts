
import { CreateAttendanceSum, UpdateAttendanceSum } from "./attendance-sum";
import { AttendanceSumService } from "./attendanceSumService";
import * as Hapi from "@hapi/hapi";
import Boom  from "@hapi/boom";


export class AttendanceSumController {

    public async create(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const requestBody: CreateAttendanceSum = request.payload as CreateAttendanceSum
            const result = await new AttendanceSumService().create(requestBody);
            return h.response(result).code(201);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async getAll(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const result = await new AttendanceSumService().getAll();
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }


    public async getById(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new AttendanceSumService().getById(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }

    }


    public async update(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const requestBody: UpdateAttendanceSum = request.payload as UpdateAttendanceSum;
            const result = await new AttendanceSumService().update(requestBody, id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }


    }


    public async delete(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const id: number = +request.params.id;
            const result = await new AttendanceSumService().delete(id);
            return h.response(result).code(200);
        } catch (error) {
            request.log("error", error);
            return Boom.badImplementation(JSON.stringify(error))
        }
    }

}