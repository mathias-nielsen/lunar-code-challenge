# Lunar Frontend Challenge

Welcome to the Lunar Web Code Challenge. This repo contains a (barely) working project which can fetch and show a list of financial transactions.

This project is based on create-react-app with typescript and (mock) Apollo Graphql for data fetching and caching. You can run the project by doing a `npm run start` and accessing it in the browser.

We have included a mock graphql "server" with hooks to query for transactions and marking them as deleted.

The following is a representation of various requests coming in for improvements to this (fictional) project. Your assignment is to implement some (not necessarily all, feel free to choose) of these requests (use ~5 hours) and be ready to tell us what you did and why.

## Request 1 - Delete a transaction
As a user, I need to be able to delete transactions of the `authorization` type.

#### Acceptance Criteria
- Each transaction has a delete button/icon which triggers a `deleteAuthorization` mutation.

#### Notes
A `deleteAuthorization` mutation hook is already made available for use.

## Request 2 - Sorting and filtering
- As a user, I need to be able to both filter and sort the listed transactions.

#### Acceptance Criteria
- Transactions can be filtered by `localizableTitle` **and** `status`.
- Transactions can be sorted descending/ascending by `time`.
- Nice to have: Multiple sorts can be applied at the same time (e.g. `status` descending, `time` ascending)
- Nice to have: Filtering and sorting is possible at the same time.

#### Notes
This should be done client-side.

## Request 3 - Transaction details
As a user, I need to be able to view detailed transation information.

#### Acceptance Criteria
- Further transaction details in the data must be viewable when selecting a transaction.

## Tech Debt
- Refactor components and files into a stucture you think is awesome and scaleable for multiple new features besides a transaction view.
- Handle error and loading states better.

## Design upgrades
According to the designer, the transaction table could use several visual upgrades:
- It should be easier to have a clear visual representation of each transaction row.
- Some icons are failing - there should be a fallback image.
- Amounts are improperly formatted - they should always be displayed with a '.' as the decimal seperator and with a ',' as thousand seperator - and with correctly formatted currency.

## Nice to know
- You have original Lunar theme colors available through props in styled-components. See `theme.ts` for documenation.

## Getting Started with Lunar Web Code Challenge
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Quick setup
- Run the recommended Node version `nvm use 14.16.0`

### Available Scripts
In the project directory, you can run:

#### `npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
