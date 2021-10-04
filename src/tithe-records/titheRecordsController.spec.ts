import * as Hapi from "@hapi/hapi";
import appInstance from "../app";
import { mocked } from 'ts-jest/utils';
import { TitheRecords } from "./tithe-record";
import { TitheRecordsService } from "./titheRecordsService";

describe("tests for TitheRecords controller", () => {
    // set dependencies
    let server: Hapi.Server;

    // Construct dummy test data
    let testData: TitheRecords[] = [
        {
            id: 1,
            amount: 465.76,
            date: "12345678",
            user: 1
        },
        {
            id: 2,
            amount: 465.76,
            date: "12345678",
            user: 3
        },
        {
            id: 3,
            amount: 465.76,
            date: "12345678",
            user: 5
        }
    ]

    // Mock service class

    // jest.mock("./titheRecordsService", () => {
    //     return {
    //         create: (theDto) => {
    //             let keys = ["amount", "date", "user"];
    //             let isObject = typeof theDto === 'object';
    //             let isRightType = keys.every(value => theDto.hasOwnProperty(value));
    //             let isRightLength = Object.keys(theDto).length === keys.length;

    //             if (isObject && isRightType && isRightLength) {
    //                 return theDto;
    //             } else {
    //                 return { error: "Wrong implementation" }
    //             }
    //         },
    //         getById: (id) => {
    //             // controller should convert request param from string to number
    //             if (typeof id !== 'number') {
    //                 return { error: "Wrong implementation" }
    //             } else {
    //                 let theItem = testData.find(value => value.id === id);
    //                 return theItem;
    //             }
    //         },
    //         getAll: () => {
    //             return testData;
    //         },
    //         update: (theDto, id) => {

    //             if (typeof theDto === 'object') {
    //                 let theItem = testData.find(value => value.id === id);
    //                 return theItem;
    //             } else {
    //                 return { error: "Wrong implementation" }
    //             }

    //         },
    //         delete: (id) => {
    //             // controller should convert request param from string to number
    //             if (typeof id !== 'number') {
    //                 return { error: "Wrong implementation" }
    //             } else {
    //                 let theItem = testData.find(value => value.id === id);
    //                 return theItem;
    //             }
    //         }
    //     }
    // });

    // effect the mock
    // TODO - FIGURE OUT WHY JEST MOCKS DON'T WORK WITH HAPI'S INJECT TEST METHOD OR USE CHAI-HTTP AS ALTERNATIVE

    // mocked(TitheRecordsService, true);

    // Set hooks

    beforeAll(async () => {
        await appInstance.init();
        server = await appInstance.theApp;
    });

    beforeEach(async () => {

    });

    afterAll(async () => {
        await server.stop();
    });


    // Write tests
    test("#create() should create the entity when passed the right input", async () => {
        const input = {
            amount: 465.76,
            date: "12345678",
            user: 3
        }
        const response = await server.inject({
            method: 'POST',
            url: '/tithe-records',
            payload: {
                ...input
            }
        });
        await expect(response.statusCode).toBe(201);


    });


    test("#getAll() should function as expected", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/tithe-records'
        });

        await expect(response.statusCode).toBe(200);


    });

});