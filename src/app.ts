import * as Hapi from "@hapi/hapi";
import attendanceSumRoutes from "./attendance-sum/attendanceSumRoutes";
import attendanceRoutes from "./attendance/attendanceRoutes";
import inventoryRoutes from "./inventory/inventoryRoutes";
import offeringRecordsRoutes from "./offering-records/offeringRecordsRoutes";
import teachingsRoutes from "./teachings/teachingsRoutes";
import titheRecordsRoutes from "./tithe-records/titheRecordsRoutes";
import userRoutes from "./users/usersRoutes";


class App {

    theApp: Hapi.Server;

    constructor() {
    }

    // function to initialize the server after routes have been registered

    public init() {

        // set up server
        this.theApp = Hapi.server({
            port: process.env.PORT || 3000,
            host: process.env.HOST || '0.0.0.0',
        });

        // register routes
        this.theApp.register([
            attendanceRoutes,
            attendanceSumRoutes,
            inventoryRoutes,
            offeringRecordsRoutes,
            teachingsRoutes,
            titheRecordsRoutes,
            userRoutes
        ]).then(() => {
            console.log("Route(s) have been registered");
        });

        // initialize app with routes

        this.theApp.initialize().then(() => {
            console.log("The app has been initialized");
        });
    }

    // Function to start the server for the main application or for tests

    public start() {

        this.theApp.start().then(() => {
            console.log(`Server running at: ${this.theApp.info.uri}`);
        })

    }


}

// create singleton for use in main app or for tests.
export const appInstance = new App();



