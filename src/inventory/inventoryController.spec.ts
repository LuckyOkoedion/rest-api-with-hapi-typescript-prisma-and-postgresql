import * as Hapi from "@hapi/hapi";
import appInstance from "../app";
import { mocked } from 'ts-jest/utils';
import { Inventory } from "./inventory";
import { InventoryService } from "./inventoryService";

describe("tests for inventory controller", () => {
    // set dependencies
    let server: Hapi.Server;

    // Construct dummy test data
    let testData: Inventory[] = [
        {
            id: 1,
            name: "Andrew Tables",
            description: "The ljaljahahlakljkajkjakl right",
            dateAcquired: "123456799",
            initialValue: 2345.09,
            calculatedDepreciation: 2345.09,
            currentLocation: "Lagos Office",
            inWhoseCustody: 3,
            custodyApprovedBy: 1
        },
        {
            id: 2,
            name: "TVs",
            description: "The ljaljahahlakljkajkjakl right",
            dateAcquired: "123456799",
            initialValue: 2345.09,
            calculatedDepreciation: 2345.09,
            currentLocation: "Lagos Office",
            inWhoseCustody: 2,
            custodyApprovedBy: 1
        },
        {
            id: 3,
            name: "Chairs",
            description: "The ljaljahahlakljkajkjakl right",
            dateAcquired: "123456799",
            initialValue: 2345.09,
            calculatedDepreciation: 2345.09,
            currentLocation: "Abuja Office",
            inWhoseCustody: 9,
            custodyApprovedBy: 5
        }
    ]

    // Mock service class

    // jest.mock("./inventoryService", () => {
    //     return {
    //         create: (theDto) => {
    //             let keys = ["name", "description", "dateAcquired", "initialValue", "calculatedDepreciation", "currentLocation", "inWhoseCustody", "custodyApprovedBy"];
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

    // mocked(InventoryService, true);

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
            name: "Andrew Tables",
            description: "The ljaljahahlakljkajkjakl right",
            dateAcquired: "123456799",
            initialValue: 2345.09,
            calculatedDepreciation: 2345.09,
            currentLocation: "Lagos Office",
            inWhoseCustody: 3,
            custodyApprovedBy: 1
        }
        const response = await server.inject({
            method: 'POST',
            url: '/inventory',
            payload: {
                ...input
            }
        });
        await expect(response.statusCode).toBe(201);


    });



    test("#getAll() should function as expected", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/inventory'
        });

        await expect(response.statusCode).toBe(200);


    });


});