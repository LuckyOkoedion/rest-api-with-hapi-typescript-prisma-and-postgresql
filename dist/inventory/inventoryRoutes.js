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
const inventoryController_1 = require("./inventoryController");
// create instance of controller
const controller = new inventoryController_1.InventoryController();
// configure the routes
const inventoryRoutes = {
    name: "inventory",
    register: (server) => __awaiter(void 0, void 0, void 0, function* () {
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
    })
};
exports.default = inventoryRoutes;
