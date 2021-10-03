import Hapi from "@hapi/hapi";
import { AttendanceController } from "./attendanceController";

// create instance of controller
const controller = new AttendanceController();

// configure the routes
const attendanceRoutes = {
    name: "attendance",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/attendance',
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/attendance',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/attendance/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/attendance/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/attendance/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default attendanceRoutes;