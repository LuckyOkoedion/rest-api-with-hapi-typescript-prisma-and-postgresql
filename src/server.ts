import { appInstance } from "./app";

// Initialize app

appInstance.init();

// Start the server

appInstance.start();

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

