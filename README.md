# REST API With Hapi.js, Typescript, Prisma ORM and Postgresql

## Description

There are not many working examples out there on how to use one of the alternatives to express js called 'Hapi Js' with typescript, and do an effective setup for complex projects.

This example is a church office management REST api built with Hapi js, Typescript , Prisma ORM and Postgresql. It is an example of how to structure a hapi js REST Api project into models, routes, controllers and services for effective separation of concerns and unit testing.

Unlike its unfortunately or fortunately more popular rival - express js, Hapi provides many tools out of the box. Enabling you to do session management, security, connectivity, and testing without installing many extra packages or middlewares. And yet these built in tools are extensible.

Prisma ORM is a typescript ORM that helps with database migration, etc.

## Documentation link for reference and demo

[LINK TO DEMO AND DOCUMENTATION](https://church-management-api.herokuapp.com/documentation)

## SIDE NOTE

Jest module mock seem not to be working AS EXPECTED when using hapi js built in inject method for http tests. Though it uses the mock implementation provided, it still validates inputs against dependencies in the mocked classes / services / functions. Alternative is to use chaihttp as used in the e2e tests till I figure out how to mock dependencies with Hapi inject without such behaviour. Though that behaviour is an advantage in some other scenarios, but not for what I needed in the tests written.

## TODO

Handle all errors instead of simply logging to the console. For now, you will see the logs when you run the tests.

## Installation

```bash
$ npm install
```

## Run Database Migration with Prisma ORM

Before this, make sure you set up a postgresql database on your machine and create environment variable named 'DATABASE_URL' with the connection url. Then the following command will automatically create the relevant tables in the database

```bash
$ npm run migrate-db
```

## Build the app to compile typscript

This will also create the prisma client required for performing database operations in the app

```bash
$ npm run build
```

## Start application / server

```bash
$ npm run start
```

## Start development server with auto reload

```bash
$ npm run dev
```

## Run automated tests

Note that by design, the first time you run the tests, a couple of the tests will fail because the database will only be populated on this first run. But on subsequent run, all tests will pass.

```bash
$ npm run test
```
