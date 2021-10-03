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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInstance = void 0;
const Hapi = __importStar(require("@hapi/hapi"));
const attendanceSumRoutes_1 = __importDefault(require("./attendance-sum/attendanceSumRoutes"));
const attendanceRoutes_1 = __importDefault(require("./attendance/attendanceRoutes"));
const inventoryRoutes_1 = __importDefault(require("./inventory/inventoryRoutes"));
const offeringRecordsRoutes_1 = __importDefault(require("./offering-records/offeringRecordsRoutes"));
const teachingsRoutes_1 = __importDefault(require("./teachings/teachingsRoutes"));
const titheRecordsRoutes_1 = __importDefault(require("./tithe-records/titheRecordsRoutes"));
const usersRoutes_1 = __importDefault(require("./users/usersRoutes"));
class App {
    constructor() {
    }
    // function to initialize the server after routes have been registered
    init() {
        // set up server
        this.theApp = Hapi.server({
            port: process.env.PORT || 3000,
            host: process.env.HOST || '0.0.0.0',
        });
        // register routes
        this.theApp.register([
            attendanceRoutes_1.default,
            attendanceSumRoutes_1.default,
            inventoryRoutes_1.default,
            offeringRecordsRoutes_1.default,
            teachingsRoutes_1.default,
            titheRecordsRoutes_1.default,
            usersRoutes_1.default
        ]).then(() => {
            console.log("Route(s) have been registered");
        });
        // initialize app with routes
        this.theApp.initialize().then(() => {
            console.log("The app has been initialized");
        });
    }
    // Function to start the server for the main application or for tests
    start() {
        this.theApp.start().then(() => {
            console.log(`Server running at: ${this.theApp.info.uri}`);
        });
    }
}
// create singleton for use in main app or for tests.
exports.appInstance = new App();
