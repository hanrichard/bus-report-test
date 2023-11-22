# Bus report test

### Description

Using React and Typescript, to create a bus report page to show the buses' status.

### What's in the project

Client provides the front-end app to view bus report data from the JSON file

### Tech stacks

React, React-query, React hooks, Typescript, ES6, storybook, style-component, ant design and scss, etc

### How to run the App

- Go to the root folder

- Run `yarn install`

- Run `yarn dev`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to test:

- Go to the root folder

- Run `yarn test`

### How to run the storybook

- Run `yarn storybook`

- Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### Note:

- You’ll need to have Node 18.18.0 or Node 18.18.0, a later version on your local development machine (but it’s not required on the server).

- You’ll need to have Chome version 119 or the later version on your local development machine.

### Assumptions

- We should have a UI lib, so, in this case, the Ant design UI library [https://ant.design/](https://ant.design/) was used in this App. Some components have been used by the library, for example:

  - Table

  - Spin

  - Accordion

  - Typography

- Once we add something to the note input, then the save notes button will be able to use,

- When we hit the save notes button, the notes will be shown straightaway and the button will be hidden for now,

- If there are no results, a "No results" message will be shown,

- Currently, we fetch the data from JSON format file stored in the public folder. However, in the prod env, we need to fetch from the real api endpoint,

- We could add pagination and sorting features to the table and add Google analysis.

### Screenshots

- Desktop view

  - ![alt text](https://github.com/hanrichard/bus-report-test/blob/master/screenshot.png?raw=true)

- Mobile view

  - ![alt text](https://github.com/hanrichard/bus-report-test/blob/master/screenshot-mobile.png?raw=true)
