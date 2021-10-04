import appInstance from "./app";

// Initialize app



appInstance.init().then(async () => {
    // Start the server
    await appInstance.start().then(() => {
        console.log(`Server is running at: ${appInstance.theApp.info.uri}`);
    })

});

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

