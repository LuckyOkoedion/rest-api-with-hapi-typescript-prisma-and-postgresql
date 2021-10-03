import { AttendanceSumController } from "./attendanceSumController";
import Hapi from "@hapi/hapi"

// create instance of controller
const controller = new AttendanceSumController();

// configure the routes
const attendanceSumRoutes = {
    name: "attendance-sum",
    register: async (server: Hapi.Server) => {
        server.route([
            {
                method: 'POST',
                path: '/attendance-sum',
                handler: controller.create
            },
            {
                method: 'GET',
                path: '/attendance-sum',
                handler: controller.getAll
            },
            {
                method: 'GET',
                path: '/attendance-sum/{id}',
                handler: controller.getById
            },
            {
                method: 'PUT',
                path: '/attendance-sum/{id}',
                handler: controller.update
            },
            {
                method: 'DELETE',
                path: '/attendance-sum/{id}',
                handler: controller.delete
            }
        ]);
    }
}

export default attendanceSumRoutes;