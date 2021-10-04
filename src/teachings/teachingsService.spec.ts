//Simple tests to ensure that all functions are defined.
// Unlike the controller tests and the end to end tests, These tests do not make use
// of Hapi server's inject method

import { TeachingsService } from "./teachingsService";

describe("TeachingsService tests", () => {
    // Get an instance of the service
    const theService: TeachingsService = new TeachingsService();

    // Only these simple tests here just as example, since no much business logic except CRUD 
    test("#create() function should be defined", () => {
        expect(theService.create).toBeDefined();
    });

    test("#getAll() function should be defined", () => {
        expect(theService.getAll).toBeDefined();
    });

    test("#getById() function should be defined", () => {
        expect(theService.getById).toBeDefined();
    });

    test("#update() function should be defined", () => {
        expect(theService.update).toBeDefined();
    });

    test("#delete() function should be defined", () => {
        expect(theService.delete).toBeDefined();
    });

})