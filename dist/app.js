"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Hapi = __importStar(require("@hapi/hapi"));
const attendanceSumRoutes_1 = __importDefault(require("./attendance-sum/attendanceSumRoutes"));
const attendanceRoutes_1 = __importDefault(require("./attendance/attendanceRoutes"));
const baseRoute_1 = __importDefault(require("./baseRoute"));
const inventoryRoutes_1 = __importDefault(require("./inventory/inventoryRoutes"));
const offeringRecordsRoutes_1 = __importDefault(require("./offering-records/offeringRecordsRoutes"));
const teachingsRoutes_1 = __importDefault(require("./teachings/teachingsRoutes"));
const titheRecordsRoutes_1 = __importDefault(require("./tithe-records/titheRecordsRoutes"));
const usersRoutes_1 = __importDefault(require("./users/usersRoutes"));
const HapiSwagger = __importStar(require("hapi-swagger"));
const Inert = __importStar(require("@hapi/inert"));
const Vision = __importStar(require("@hapi/vision"));
class App {
    constructor() {
    }
    // function to initialize the server after routes have been registered
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            // set up server
            this.theApp = Hapi.server({
                port: process.env.PORT || 3000,
                host: process.env.HOST || '0.0.0.0',
            });
            // Configure swagger documentation
            const swaggerOptions = {
                info: {
                    title: "Church Office Management REST API Documentation",
                    version: "1.0.0",
                    description: "There are not many working examples out there on how to use one of the alternatives to express js called 'Hapi Js' with typescript and effective setup for complex projects. This is a church office management REST api built with Hapi js, Typescript , Prisma ORM and Postgresql. It is an example of how to structure a hapi js REST Api project into models, routes, controllers and services for effective separation of concerns and unit testing.",
                    contact: {
                        name: "Lucky Okoedion",
                        url: "https://www.linkedin.com/in/lucky-okoedion-28b7286a/"
                    }
                }
            };
            const swaggerPlugins = [
                {
                    plugin: Inert
                },
                {
                    plugin: Vision
                },
                {
                    plugin: HapiSwagger,
                    options: swaggerOptions
                }
            ];
            // register swagger plugins
            yield this.theApp.register(swaggerPlugins, { once: true });
            // register routes
            yield this.theApp.register([
                baseRoute_1.default,
                attendanceRoutes_1.default,
                attendanceSumRoutes_1.default,
                inventoryRoutes_1.default,
                offeringRecordsRoutes_1.default,
                teachingsRoutes_1.default,
                titheRecordsRoutes_1.default,
                usersRoutes_1.default
            ], { once: true }).then(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                console.log("Route(s) have been registered");
                // initialize app with routes
                yield ((_a = this.theApp) === null || _a === void 0 ? void 0 : _a.initialize().then(() => {
                    console.log("The app has been initialized");
                }));
            }));
        });
    }
    // Function to start the server for the main application or for tests
    start() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this.theApp) === null || _a === void 0 ? void 0 : _a.start());
        });
    }
}
// create singleton for use in main app or for tests.
const appInstance = new App();
exports.default = appInstance;
