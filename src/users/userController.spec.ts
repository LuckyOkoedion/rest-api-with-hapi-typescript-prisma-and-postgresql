import * as Hapi from "@hapi/hapi";
import appInstance from "../app";
import { mocked } from 'ts-jest/utils';
import { User } from "./user";
import { UserService } from "./userService";

describe("tests for User controller", () => {
    // set dependencies
    let server: Hapi.Server;

    // Construct dummy test data
    let testData: User[] = [
        {
            id: 1,
            email: "lucky@okoedion.com",
            name: "Lucky Okoedion",
            role: "staff",
            phoneNumber: "ajljkahakajjlak",
            permissions: "ljakjkajljakjaklj"
        },
        {
            id: 2,
            email: "camilla@emmanuel.com",
            name: "Camilla Emmanuel",
            role: "pastor",
            phoneNumber: "ajljkahakajjlak",
            permissions: "ljakjkajljakjaklj"
        },
        {
            id: 3,
            email: "mitchel@saturday.com",
            name: "Mitchel Saturday",
            role: "staff",
            phoneNumber: "ajljkahakajjlak",
            permissions: "ljakjkajljakjaklj"
        }
    ]

    // Mock service class

    // jest.mock("./userService", () => {
    //     return {
    //         create: (theDto) => {
    //             let keys = ["email", "name", "role", "phoneNumber", "permissions"];
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


    // mocked(UserService, true);

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
            email: "lucky@okoedion.com",
            name: "Lucky Okoedion",
            role: "staff",
            phoneNumber: "ajljkahakajjlak",
            permissions: "ljakjkajljakjaklj"
        }
        const response = await server.inject({
            method: 'POST',
            url: '/users',
            payload: {
                ...input
            }
        });
        await expect(response.statusCode).toBe(201);



    });


    test("#getAll() should function as expected", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/users'
        });

        await expect(response.statusCode).toBe(200);


    });


});