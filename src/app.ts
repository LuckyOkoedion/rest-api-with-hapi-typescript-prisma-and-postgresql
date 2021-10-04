import * as Hapi from "@hapi/hapi";
import attendanceSumRoutes from "./attendance-sum/attendanceSumRoutes";
import attendanceRoutes from "./attendance/attendanceRoutes";
import baseRoute from "./baseRoute";
import inventoryRoutes from "./inventory/inventoryRoutes";
import offeringRecordsRoutes from "./offering-records/offeringRecordsRoutes";
import teachingsRoutes from "./teachings/teachingsRoutes";
import titheRecordsRoutes from "./tithe-records/titheRecordsRoutes";
import userRoutes from "./users/usersRoutes";
import * as HapiSwagger from "hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";



class App {

    theApp: Hapi.Server | undefined;

    constructor() {
    }

    // function to initialize the server after routes have been registered

    public async init() {

        // set up server
        this.theApp = Hapi.server({
            port: process.env.PORT || 3000,
            host: process.env.HOST || '0.0.0.0',
        });

        // Configure swagger documentation

        const swaggerOptions: HapiSwagger.RegisterOptions = {
            info: {
                title: "Church Office Management REST API Documentation",
                version: "1.0.0",
                description: "There are not many working examples out there on how to use one of the alternatives to express js called 'Hapi Js' with typescript and do effective setup for complex projects. This is a church office management REST api built with Hapi js, Typescript , Prisma ORM and Postgresql. It is an example of how to structure a hapi js REST Api project into models, routes, controllers and services for effective separation of concerns and unit testing.",
                contact: {
                    name: "Lucky Okoedion",
                    url: "https://www.linkedin.com/in/lucky-okoedion-28b7286a/"
                }
            }

        };

        const swaggerPlugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
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
        ]

        // register swagger plugins
        await this.theApp.register(swaggerPlugins, { once: true });

        // register routes
        await this.theApp.register([
            baseRoute,
            attendanceRoutes,
            attendanceSumRoutes,
            inventoryRoutes,
            offeringRecordsRoutes,
            teachingsRoutes,
            titheRecordsRoutes,
            userRoutes

        ], { once: true }).then(async () => {
            console.log("Route(s) have been registered");

            // initialize app with routes
            await this.theApp?.initialize().then(() => {
                console.log("The app has been initialized");
            });

        });
    }

    // Function to start the server for the main application or for tests

    public async start() {
        await this.theApp?.start();
    }


}

// create singleton for use in main app or for tests.
const appInstance = new App();

export default appInstance;



