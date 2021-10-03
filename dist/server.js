"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// Initialize app
app_1.appInstance.init();
// Start the server
app_1.appInstance.start();
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
