import { UserController } from "./userController";
import * as Hapi from "@hapi/hapi";

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
                handler: controller.create,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/users',
                handler: controller.getAll,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'GET',
                path: '/users/{id}',
                handler: controller.getById,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'PUT',
                path: '/users/{id}',
                handler: controller.update,
                options: {
                    tags: ['api']
                }
            },
            {
                method: 'DELETE',
                path: '/users/{id}',
                handler: controller.delete,
                options: {
                    tags: ['api']
                }
            }
        ]);
    }
}

export default userRoutes;