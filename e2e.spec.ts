// Here are the end to end tests for the routes. 
// But the unit tests are in the same folder with the file containing the functions they test
// We will use chai-http to test the api over http 
// and to test external services such as the postgresq database working with the prisma ORM client

import chai, { expect } from "chai"
import chaiHttp from "chai-http";
import * as Hapi from "@hapi/hapi";
import appInstance from "./src/app";

// Bring in chai-http

chai.use(chaiHttp);



describe("end-to-end / integration tests", () => {
    // bring in the server

    let server: Hapi.Server;

    // Pass 'API' below to request instead of 'server' above since hapi js server instance does not have 
    // address() function like express which chai-http expects

    const API = 'http://localhost:3000'

    // Set hooks

    beforeAll(async () => {
        await appInstance.init();
        server = await appInstance.theApp;
        await server.start()
    });

    beforeEach(async () => {

    });

    afterAll(async () => {
        await server.stop();
    });

    // Let us test only all the getAll() enpoints for each Model for example

    describe("Base route endpoint", () => {
        it("Live server should return success from base route", done => {
            chai.request(API)
                .get("/")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Attendance model endpoint", () => {
        it("Live server should return all attendance in the database", done => {
            chai.request(API)
                .get("/attendance")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Attendance Sum model endpoint", () => {
        it("Live server should return all attendance sum in the database", done => {
            chai.request(API)
                .get("/attendance-sum")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Inventory model endpoint", () => {
        it("Live server should return all inventories in the database", done => {
            chai.request(API)
                .get("/inventory")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Offering Records model endpoint", () => {
        it("Live server should return all offering records in the database", done => {
            chai.request(API)
                .get("/offering-records")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Teachings model endpoint", () => {
        it("Live server should return all teaching records in the database", done => {
            chai.request(API)
                .get("/teachings")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Tithe Records model endpoint", () => {
        it("Live server should return all tithe records in the database", done => {
            chai.request(API)
                .get("/tithe-records")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("User model endpoint", () => {
        it("Live server should return all users in the database", done => {
            chai.request(API)
                .get("/users")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });



})


