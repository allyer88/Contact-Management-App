# Contact-Management-App
Learn Node.js &amp; Express with Project from a online source(Dipesh Malvia)

# Node.js & Express Authentication API
This is a simple authentication API built with Node.js, Express, MongoDB, and JWT (JSON Web Token). It provides user registration and login features, and uses JWT for secure authentication.

# Features
- User registration with encrypted password (bcrypt)
- User login with JWT authentication
- Protected routes accessible only with valid JWT
- MongoDB for data storage

Getting Started
1. Clone the Repo

``` git clone https://github.com/your-username/node-express-auth-api.git ```

``` cd mycontacts-backend ```

2. Install Dependencies
``` npm install```

4. Set Up Environment Variables
Create a .env file in the root directory and add the following environment variables:

PORT = 5000

CONNECT_STRING =your_mongo_db_connection_string

ACCESS_TOKEN_SECRET =your_jwt_secret

-----------------------------------------------

CONNECT_STRING: Your MongoDB connection string.

ACCESS_TOKEN_SECRET: A secret string for signing JWT tokens.

-----------------------------------------------

4. Start the Server

```npm run dev```

