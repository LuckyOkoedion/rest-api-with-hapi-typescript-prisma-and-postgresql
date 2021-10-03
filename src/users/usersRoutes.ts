import { UserController } from "./userController";
import Hapi from "@hapi/hapi";

// create instance of controller
const controller = new UserController();

// configure the routes
const userRoutes = {
    name: "users",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/users',
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/users',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/users/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/users/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/users/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default userRoutes;