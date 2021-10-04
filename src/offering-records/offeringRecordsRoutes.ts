import { OfferingRecordsController } from "./offeringRecordsController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new OfferingRecordsController();

// configure the routes
const offeringRecordsRoutes = {
    name: "offering-records",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/offering-records',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/offering-records',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/offering-records/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/offering-records/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/offering-records/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default offeringRecordsRoutes;