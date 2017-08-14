# Hermes-Manager-Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run 'ng serve --proxy-config proxy.config.json' for serve with proxy to api endpoint.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `npm run clean` for remove dist and public (if not exist this directory will error occur!!!);
Run `npm run dockerClean` for delete all docker images and container before build new;
Run `npm run build` buld prod+aot+precash version ;
Run `npm run copy` copy from dist to express/public;
Run `npm run prod` for create docker image named 'ai' and run container named 'ac';

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
