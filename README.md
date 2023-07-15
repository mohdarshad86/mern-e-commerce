# MERN-E-Commerce

# Frontend

Navigate to the frontend directory:

```bash
cd client
```

and see Readme.md file there

# Backend

This repository contains the backend code for a web application designed to handle payment processing using the Express.js framework. The backend is responsible for handling checkout requests and verifying payments.

## Getting Started

To set up and run the backend locally, follow these instructions:

### Prerequisites

1. Node.js and npm must be installed on your machine. You can download Node.js from the official website: [Node.js](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine using `git clone`.

2. Navigate to the project directory:

```bash
cd server
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Backend

To start the backend server, use the following command:

```bash
npm start
```

By default, the server will run on port 3000. You can access it at `http://localhost:3000`.

## Endpoints

The backend provides the following endpoints for the payment processing:

### `POST /checkout`

This endpoint is used to initiate the payment process. When a request is made to this endpoint, the backend should handle the checkout process, calculate the payment amount, and return relevant payment information to the client.

### `POST /paymentverification`

After the user completes the payment on the frontend, this endpoint is called by the client to verify the payment status. The backend should validate the payment details received from the client and confirm whether the payment was successful or not.

## Controllers

The backend uses the following controllers to handle the endpoints:

- `checkout`: This controller is responsible for handling the checkout process and generating payment information.

- `paymentVerification`: This controller verifies the payment status by checking the payment details received from the client.

## Dependencies

The backend utilizes the following main dependencies:

- `express`: A web application framework for Node.js used to build the API endpoints.

## Contributing

If you wish to contribute to this project, feel free to create a pull request. Make sure to follow the project's coding standards and submit a detailed description of your changes.

## Issues

If you encounter any issues or have suggestions for improvement, please open an issue on this repository.

---

Thank you for your interest , You can give a star if you like this mern application. In case if you have any questions or need further assistance, feel free to reach out. Happy coding!