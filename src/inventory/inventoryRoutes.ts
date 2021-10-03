import { InventoryController } from "./inventoryController";
import Hapi from "@hapi/hapi";

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
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/inventory',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/inventory/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/inventory/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/inventory/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default inventoryRoutes;