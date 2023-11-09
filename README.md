# Project Name

This is a full-stack web application built using React, Express, REST APIs and mongoDB.

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech Stack

- Frontend: React
- Backend: Node, Express
- Database: mnogoDB

## Architecture

The frontend is built with React and makes requests to the backend Express API. The Express server handles requests, interfaces with the database, and serves the React frontend.

Here is a diagram showing the architecture:

┌───────────────────────┐         ┌─────────────────────┐
│ JavaScript/React      │         │   Node/Express      │
│                       │         │                     │  
│  Makes API requests   │◀────▶│  Handles API requests│
│         ┌─────────┐   │         └───────────────────┘
│         │         │   │                   ▲
└─────────┤  User   ├───┘                   │
         │Interface│                       │
         └─────────┘                       │
                     ┌─────────────────────┴────────┐
                     │                           │
                     │       mnogoDB           │ 
                     │                           │
                     │                           │
                     └───────────────────────────┘





## Setup


### Backend

1. `cd backend`
2. `npm install` to install dependencies
3. Set up a mongoDB database
4. Create a .env file with the database URL and other environment variables
5. `npm run dev` to start the dev server

### Frontend

1. `cd frontend`
2. `npm install` to install dependencies
3. Update .env with API url
4. `npm start` to start the dev server

## API Reference

TODO - List API endpoints here

## License

MIT
