import { AttendanceSumController } from "./attendanceSumController";
import Hapi from "@hapi/hapi"

// create instance of controller
const controller = new AttendanceSumController();

// configure the routes
const attendanceSumRoutes = {
    name: "attendance-sum",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/attendance-sum',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/attendance-sum',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/attendance-sum/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/attendance-sum/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/attendance-sum/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default attendanceSumRoutes;