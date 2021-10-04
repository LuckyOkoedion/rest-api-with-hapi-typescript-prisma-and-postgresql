import { TeachingsController } from "./teachingsController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new TeachingsController();

// configure the routes
const teachingsRoutes = {
    name: "teachings",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/teachings',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/teachings',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/teachings/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/teachings/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/teachings/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default teachingsRoutes;