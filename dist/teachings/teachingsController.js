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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachingsController = void 0;
const teachingsService_1 = require("./teachingsService");
const boom_1 = __importDefault(require("@hapi/boom"));
class TeachingsController {
    create(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestBody = request.payload;
                const result = yield new teachingsService_1.TeachingsService().create(requestBody);
                return h.response(result).code(201);
            }
            catch (error) {
                request.log("error", error);
                return boom_1.default.badImplementation(JSON.stringify(error));
            }
        });
    }
    getAll(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new teachingsService_1.TeachingsService().getAll();
                return h.response(result).code(200);
            }
            catch (error) {
                request.log("error", error);
                return boom_1.default.badImplementation(JSON.stringify(error));
            }
        });
    }
    getById(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +request.params.id;
                const result = yield new teachingsService_1.TeachingsService().getById(id);
                return h.response(result).code(200);
            }
            catch (error) {
                request.log("error", error);
                return boom_1.default.badImplementation(JSON.stringify(error));
            }
        });
    }
    update(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +request.params.id;
                const requestBody = request.payload;
                const result = yield new teachingsService_1.TeachingsService().update(requestBody, id);
                return h.response(result).code(200);
            }
            catch (error) {
                request.log("error", error);
                return boom_1.default.badImplementation(JSON.stringify(error));
            }
        });
    }
    delete(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +request.params.id;
                const result = yield new teachingsService_1.TeachingsService().delete(id);
                return h.response(result).code(200);
            }
            catch (error) {
                request.log("error", error);
                return boom_1.default.badImplementation(JSON.stringify(error));
            }
        });
    }
}
exports.TeachingsController = TeachingsController;
