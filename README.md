# Elucidat Javascript Coding Test

This coding test is split into two parts, frontend focused and backend focused, please pick the one that is most relevant to your desired role. Fullstack developers or the adventurous can attempt both.  Whatever test you do, please read to the end as there is information for both tests further down.

## Frontend Focus test

You are developing a user interface for a cinema booking system.  The UI should include the layout of the cinema and when a user clicks on a seat they should be presented with their booking information in the style of a cinema ticket.  Users should be able to see the booking information, such as seat number, availability and price, before they click to book the seat.

If you are familiar with react, please use that to build the UI.  This project has been created using facebook's create-react-app.  If you are not familiar with react and would prefer to use jQuery or vanilla javascript, please use the index.html inside the build folder as a starting point.

React developers, please use yarn rather than npm and please do not eject the create-react-app set up. The react app can be started for development on port 3000 using `yarn start-frontend`.

Guidance:

Understanding that time may be a constraint for some, please focus on writing clean, maintainable and testable code rather than going overboard on UI design.


## Backend Focus test

You are developing the backend api for a cinema booking system.  The server should be written using express that has been set up to a basic extent for you.  The starting file for the api is `server.js` and the server can be started on port 8080 using `yarn backend-start`  The REST API should have the following endpoints:

`/seatData` [GET REQUEST] should take one query parameter, `seatNumber` and return a json response in the following format

```
    {
        "seatNumber": "1A",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": true
    }
```

`/bookSeat` [POST REQUEST] should take one body parameter, `seatNumber` and should alter the state of the seat availability and return the details of the seat in the same format as `/seatData`.

`/availableSeats` [GET REQUEST] will take one optional query parameter `disabled`.  If disabled is false it will return all the available seats.  If it is true, it will return only the disabled seats that are disability accessible.  The return value should be a json response in the following format

```
    {
        seats: ["1A", "2A", "3A"]
    }
```

`/cheapestSeat` [GET REQUEST] will take no parameters and will return the cheapest, available seat(s) in the following format

```
    {
        seats: ["1A"]
    }
```

If you have the time and want to take on a further challenge then imagine the following scenario:
The booking site has proven extremely popular and traffic to it is heavy, multiple people try to book the same seat in a smaller time period than it takes to complete the booking.  Please code a way around this problem and explain your approach here:



## Further Information

- Dummy data for the seats in both tests has been provided in `seatData.js` feel free to move this file or convert it if you wish, but please use the data as provided.
- create-react-app bundles jest with it, however if you wish to write automated tests for front or back end, it is not required to only use jest. Please do, however, include a simple script in the package.json to run the tests, and explain your approach here:










####################################### create-react-app info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
