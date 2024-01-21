# Project Name: KryptoSphere
## Overview
KryptoSphere is a cutting-edge platform that combines the security of blockchain transactions with the dynamic user interface provided by React. This repository contains both the frontend and backend components of the project.

## Frontend
Technologies Used

**React**: A powerful JavaScript library for building user interfaces.

**Javascript**: A programming language used to modify the html elements.

## Project Structure
**/src**: Contains the source code for the React frontend.

**/public**: Includes static assets and the HTML entry point.

## How to Run
Navigate to the /frontend directory.

Run **npm install** to install dependencies.

Execute **npm start** to launch the development server.

Access the application at http://localhost:3000.

## Backend
Technologies Used

**Solidity**: The programming language for writing smart contracts on the Ethereum blockchain.

**Hardhat**: A development environment for Ethereum smart contracts.

### Project Structure

**/contracts**: Contains Solidity smart contract files.

**/scripts**: Includes deployment and other scripts.

**/test**: Contains unit tests for smart contracts.

### How to Run

Navigate to the /backend directory.

Run **npm install** to install project dependencies.

Execute **npx hardhat** test to run unit tests.

Deploy the smart contracts using **npx hardhat run scripts/deploy.js --network [network]**.


# Known Bug

HH19 Error in Backend

There is a known bug in the backend related to the HH19 error. This error occurs due to a mismatch between the ESM (ECMAScript Modules) project setup and the use of the .js extension in the Hardhat config file.

This should resolve the HH19 error in the backend.


## Contributors
1. [B. Varun](https://github.com/varunb1410)
2. [P. Sri Sachith](https://github.com/sachiths5).

Feel free to contribute to the project by submitting pull requests or reporting issues. Happy coding!
