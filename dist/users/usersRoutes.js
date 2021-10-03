"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./userController");
// create instance of controller
const controller = new userController_1.UserController();
// configure the routes
const userRoutes = {
    name: "users",
    register: (server) => __awaiter(void 0, void 0, void 0, function* () {
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
    })
};
exports.default = userRoutes;
