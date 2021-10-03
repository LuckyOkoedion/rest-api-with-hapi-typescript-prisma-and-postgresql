import { TeachingsController } from "./teachingsController";
import Hapi from "@hapi/hapi";

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
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/teachings',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/teachings/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/teachings/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/teachings/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default teachingsRoutes;