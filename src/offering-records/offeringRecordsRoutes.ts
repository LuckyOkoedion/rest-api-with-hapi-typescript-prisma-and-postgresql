import { OfferingRecordsController } from "./offeringRecordsController";
import Hapi from "@hapi/hapi";

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
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/offering-records',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/offering-records/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/offering-records/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/offering-records/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default offeringRecordsRoutes;