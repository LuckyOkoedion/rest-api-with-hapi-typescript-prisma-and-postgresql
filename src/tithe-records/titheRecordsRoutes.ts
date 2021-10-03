import { TitheRecordsController } from "./titheRecordsController";
import Hapi from "@hapi/hapi";

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
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/tithe-records',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/tithe-records/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/tithe-records/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/tithe-records/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default titheRecordsRoutes;