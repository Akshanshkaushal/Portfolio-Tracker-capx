 # Portfolio Tracker

A comprehensive portfolio tracker application that allows users to manage their stock portfolio, fetch stock prices, and calculate portfolio value. Built with a robust frontend and backend, the application provides seamless integration of portfolio management and stock price fetching.

# Portfolio Tracker - Project Showcase 🎥

Explore the user interface and functionality of the **Portfolio Tracker** project! This video demonstrates the seamless workflow, including adding stocks, managing portfolios, and visualizing data.

# 🎥 **MUST-WATCH: Portfolio Tracker - Live Demo** 🎥

🚀 **Experience the magic of Portfolio Tracker in action!** See how easy it is to manage your stocks, visualize your portfolio, and make smart financial decisions.  

---

<div align="center" style="border: 2px solid #FFD700; padding: 20px; border-radius: 10px; background-color: #FFFBEA;">
  <a href="https://www.loom.com/share/c81486b84cf44c21a8bed709422236a9?sid=b5a1bad9-d443-4dca-abcb-a70e65075f1d" target="_blank">
    <img src="frontend/public/graph.png" alt="Portfolio Tracker Demo Video" style="width: 100%; max-width: 600px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
  </a>
  <h2 style="color: #FF4500; margin-top: 15px;">
    👉 CLICK THE IMAGE TO WATCH THE VIDEO 👈
  </h2>
  <p style="font-size: 1.1rem; color: #333; margin-top: 10px;">
    <strong>Discover the intuitive interface, key features, and powerful tools in just a few minutes!</strong>
  </p>
</div>

---

🌟 **Why Watch This Demo?**
- Learn how to **add stocks** effortlessly to your portfolio.
- See how to **visualize your portfolio metrics** for better decision-making.
- Explore features like **real-time graphing**, **editing**, and **deleting stocks**. 

🔗 **Don’t miss out! [Watch the full video now.](https://www.loom.com/share/c81486b84cf44c21a8bed709422236a9?sid=b5a1bad9-d443-4dca-abcb-a70e65075f1d)**  



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

- You will need an API key from [Alpha Vantage](https://www.alphavantage.co/documentation/) to fetch stock prices.
- Add your API key to the `PortfolioDashboard.js` file in the frontend.
- <div align="center">
  <img src="./frontend/public/aoi_key.png" alt="Main Functionality" width="600"/>
</div>

### Environment Variables:

- Add necessary environment variables to `.env` files for both the frontend and backend, such as database credentials and API keys.

## Run the Application Locally

### Frontend:
To start the frontend, run the following commands:

```bash
cd frontend
npm start
```

### Backend:
To start the backend, run the following commands:

```bash
cd backend
npm start
```

## 🚀 API Documentation

Explore the complete and interactive API documentation through the live link below:

🔗 [**Portfolio Tracker API Docs**](https://portfolio-tracker-backend-keer.onrender.com/api-docs/)

### 📄 API Functionality Overview

Below are some snapshots of the API functionality to help you understand its features:

#### API Documentation Interface
![API Documentation Interface](./frontend/public/api.png)

#### Example of a GET Request
![GET Request Example](./frontend/public/get.png)

## 🎨 User Interface Walkthrough

Below is a step-by-step guide to navigating through the main features of the **Portfolio Tracker** application, with accompanying visuals to help you understand the workflow.

---

### 1️⃣ **Main Interface**
The main interface provides an overview of your portfolio and key functionalities. You can navigate to add stocks, view portfolio metrics, and analyze graphs.

<div align="center">
  <img src="./frontend/public/main.png" alt="Main Functionality" width="600"/>
</div>

---

### 2️⃣ **Adding a Stock**
To add a stock:
- Click the "Add Stock" button.
- Enter the stock details, including **name**, **ticker symbol**, **quantity**, and **buy price**.
- Click **Submit** to add the stock to your portfolio.

<div align="center">
  <img src="./frontend/public/add.png" alt="Add Functionality" width="600"/>
</div>

---

### 3️⃣ **Dashboard and Portfolio Metrics**
Once stocks are added, the dashboard displays a summary of your portfolio with key metrics like **total value**, **number of stocks**, and their current market value.

<div align="center">
  <img src="./frontend/public/dash1.png" alt="Dashboard Functionality" width="600"/>
</div>

---

### 4️⃣ **Graphical Analysis**
Analyze your portfolio's performance over time with interactive graphs. The graph provides insights into trends and allows for better investment decision-making.

<div align="center">
  <img src="./frontend/public/graph.png" alt="Graph Functionality" width="600"/>
</div>

---

### 5️⃣ **Viewing Portfolio Stocks**
The detailed portfolio section lists all stocks, including their **name**, **ticker**, **quantity**, **buy price**, and **current market price**.

<div align="center">
  <img src="./frontend/public/portfolio_stoks.png" alt="Portfolio Stocks Functionality" width="600"/>
</div>

---

### 6️⃣ **Edit and Delete Functionality**
- **Edit**: Modify stock details (e.g., quantity or buy price) to keep your portfolio updated.
- **Delete**: Remove unwanted stocks from your portfolio with a single click.

<div align="center">
  <img src="./frontend/public/edit.png" alt="Edit Functionality" width="600"/>
</div>

---

### 📋 **Steps to Use the Application**
1. **Navigate to the Main Interface**: Begin at the main dashboard to get an overview of your portfolio.
2. **Add a Stock**: Use the "Add Stock" feature to include new investments in your portfolio.
3. **View Portfolio Metrics**: Access the dashboard to track your portfolio's total value and individual stock details.
4. **Analyze Performance**: Use the graphical insights for performance trends and predictions.
5. **Edit or Delete**: Modify stock details or remove stocks as necessary to maintain accuracy.

---

This guide ensures a smooth user experience while utilizing all the features of the Portfolio Tracker app. Explore and make the most of your investments!



