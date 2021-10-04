import { InventoryController } from "./inventoryController";
import * as Hapi from "@hapi/hapi";

// create instance of controller
const controller = new InventoryController();

// configure the routes
const inventoryRoutes = {
    name: "inventory",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/inventory',
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/inventory',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/inventory/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/inventory/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/inventory/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default inventoryRoutes;