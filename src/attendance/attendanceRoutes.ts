import * as Hapi from "@hapi/hapi";
import { AttendanceController } from "./attendanceController";

// create instance of controller
const controller = new AttendanceController();

// configure the routes
const attendanceRoutes = {
    name: "theAttendance",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/attendance',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/attendance',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/attendance/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/attendance/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/attendance/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default attendanceRoutes;