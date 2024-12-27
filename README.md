 # Portfolio Tracker

A comprehensive portfolio tracker application that allows users to manage their stock portfolio, fetch stock prices, and calculate portfolio value. Built with a robust frontend and backend, the application provides seamless integration of portfolio management and stock price fetching.

## Features

- **Portfolio Management**: Add, update, fetch, and delete stocks in your portfolio.
- **Stock Price Integration**: Get real-time stock prices using the Alpha Vantage API.
- **Portfolio Value Calculation**: Calculate the total value of your portfolio based on the latest stock prices.

## Table of Contents

1. [Install Dependencies](#install-dependencies)
2. [Configuration](#configuration)
3. [Run the Application Locally](#run-the-application-locally)
4. [API Documentation](#api-documentation)
5. [Deployment Links](#deployment-links)
6. [Contributing](#contributing)
7. [License](#license)

## Install Dependencies

To get started with the application, you'll need to install the necessary dependencies for both the frontend and backend.

### Frontend Setup:

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Backend Setup:

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

### MySQL Setup:

- Create a MySQL database for the application.
- Configure the database credentials in the `config/database.js` file for backend setup.

### API Keys:

- You will need an API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key) to fetch stock prices.
- Add your API key to the `config/apiKeys.js` file in the backend.

### Environment Variables:

- Add necessary environment variables to `.env` files for both the frontend and backend, such as database credentials and API keys.

## Run the Application Locally

### Frontend:
To start the frontend, run the following commands:

```bash
cd frontend
npm start
```

## API Documentation

For a complete and interactive API documentation, visit the live documentation here:  
[Portfolio Tracker API Docs](https://portfolio-tracker-backend-keer.onrender.com/api-docs/)
