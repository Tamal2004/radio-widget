# Radio Widget Application

This is a sample project of a RadioWidget. The application design is based off of the following provided design
as closely as possible without the exact design specs.

![Radio Widget Template](https://user-images.githubusercontent.com/23403881/152678664-bb37896b-747c-462a-ae15-803c958a54e8.png)

## Technologies used

-   React
-   Typescript
-   CSS Modules with Sass
-   Redux
-   Redux Saga
-   Jest & React Testing Library
-   React Transition Group

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.

# Test coverage analysis

The main driving force behind how testing was approached for this project is based on [Kent C. Dodds'](https://kentcdodds.com/blog/write-tests)

**_"Write tests. Not too many. Mostly integration."_**

Testing has 2 main users

-   The end user/consumer
-   The developer

In both cases, it makes most sense to test the application in the way an end user/consumer would
for our critical path. In addition to this, tests should be very wary of mimicking implementation
details themselves since that makes the tests very brittle/fragile to refactors and often gives false
positives/negatives; this leads to a bad developer experience and defeats the purpose of testing the
codebase in the first place since the time-saving benefits are negated.

This is the trophy of test coverage coined by Kent C. Dodds himself:

![Testing Ratio Trophy](https://res.cloudinary.com/kentcdodds-com/image/upload/f_auto,q_auto,dpr_2.0/v1622744540/kentcdodds.com/blog/the-testing-trophy-and-testing-classifications/trophy_wx9aen.png)

It primarily focuses on integration testing since that is where the bulk of the benefits to testing is.
In addition, it places great emphasis on static testing which in this case is covered by Typescript.

## Test suites

For this project, there are 3 main test suites

### Component library unit tests

-   The only reusable component created is IconButton.
-   The unit test here ensures that this simple component works as expected.

### RadioWidget integration/e2e tests

-   The critical flow is being tested here by simulating how an end user would interact with the system
-   Since the project has used `react-transition-group`, it is pertinent to disable this before the.
    test suite is run to not artificially increase test runner resource usage.
-   The toggle functionality is tested.
    -   Checks for the currently playing section & current station sections.
-   Asynchronous loading of the stations data is tested.

### Redux unit tests

-   The project's business logic resides in the `redux` store & `redux-saga` workers.
-   All asynchronous business logic are in the sagas (loading & normalization).
-   All synchronous business logic are in the reducers.
    -   Reducers have been tested, they mirror quite a lot of the logic from the `RadioWidget`
        integration/e2e tests. This is needed usually for scaling projects.
-   Actions & Action creators are statically tested by Typescript and will be caught at
    compilation time.

In addition to this, the project has been strongly typed wherever possible; this addresses the "Developer"
user has a painless experience using & refactoring existing code.

### Tests will not fail when changing to a Backend API

Changing how the stations data is retrieved to a backend API will not break any of the existing
tests. One thing to note is that the data returned from the API will still need to be normalized
into a format that the rest of the application can parse.
