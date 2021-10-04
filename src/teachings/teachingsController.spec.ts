import * as Hapi from "@hapi/hapi";
import appInstance from "../app";
import { mocked } from 'ts-jest/utils';
import { Teachings } from "./teachings";
import { TeachingsService } from "./teachingsService";

describe("tests for teachings controller", () => {
    // set dependencies
    let server: Hapi.Server;

    // Construct dummy test data
    let testData: Teachings[] = [
        {
            id: 1,
            eventName: "Meeting",
            date: "12345678",
            preacher: "WF Kumuyi",
            topic: "The beatitudes",
            summary: "Be true to yourself",
            audioLink: "jkljalkjakljkaj",
            videoLink: "ljkjaljkljakjaj",
            slidesLink: "oouiepioiep"
        },
        {
            id: 2,
            eventName: "Coding",
            date: "12345678",
            preacher: "WF Kumuyi",
            topic: "The beatitudes",
            summary: "Be true to yourself",
            audioLink: "jkljalkjakljkaj",
            videoLink: "ljkjaljkljakjaj",
            slidesLink: "oouiepioiep"
        },
        {
            id: 3,
            eventName: "Meeting",
            date: "12345678",
            preacher: "WF Kumuyi",
            topic: "The beatitudes",
            summary: "Be true to yourself",
            audioLink: "jkljalkjakljkaj",
            videoLink: "ljkjaljkljakjaj",
            slidesLink: "oouiepioiep"
        }
    ]

    // Mock service class

    // jest.mock("./teachingsService", () => {
    //     return {
    //         create: (theDto) => {
    //             let keys = ["eventName", "date", "preacher", "topic", "summary", "audioLink", "videoLink", "slidesLink"];
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

    // mocked(TeachingsService, true);

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
            eventName: "Coding",
            date: "12345678",
            preacher: "WF Kumuyi",
            topic: "The beatitudes",
            summary: "Be true to yourself",
            audioLink: "jkljalkjakljkaj",
            videoLink: "ljkjaljkljakjaj",
            slidesLink: "oouiepio"
        }
        const response = await server.inject({
            method: 'POST',
            url: '/teachings',
            payload: {
                ...input
            }
        });
        await expect(response.statusCode).toBe(201);


    });


    test("#getAll() should function as expected", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/teachings'
        });

        await expect(response.statusCode).toBe(200);


    });


});