import { TitheRecordsController } from "./titheRecordsController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new TitheRecordsController();

// configure the routes
const titheRecordsRoutes = {
    name: "tithe-records",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/tithe-records',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/tithe-records',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/tithe-records/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/tithe-records/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/tithe-records/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default titheRecordsRoutes;