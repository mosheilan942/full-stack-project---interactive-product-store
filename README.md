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


=====================================================================================


Here is a draft README for the store app specification:

# Store App

## Technologies

- React
- Express
- REST
- MongoDB  
- MUI
- OpenLayers

## Screens

### 1. Login

- Text fields for email, password
- Login button - if login succeeds, redirect user to URL they were on before login screen. Could be modal instead of separate screen.
- Sign up button - go to screen 2

### 2. Signup 

- Text fields for email, password, confirm password
- Signup button - if signup succeeds, redirect user to URL they were on before login screen. Could be modal instead of separate screen.

### 3. Home (no login required)

- Shows all product categories (categories are clickable to go to screen 4) 
- Shows top 5 most clicked categories - each category clickable to go to screen 4
- Shows top 5 most clicked products - each product clickable to go to screen 5

### 4. Category (no login required) 

- Shows all available products
- Filtering of products (client-side) by:
  - Category attributes e.g. screen size, storage for phones category; volume, number of doors for fridge category
  - Price range

### 5. Product (no login required)

- Product details
- Add to cart button 
- Compare button - clicks take user to category screen 4 of product they want to compare, but now clicking a product takes them to compare screen 6

- Map showing store locations

### 6. Compare Products (no login required)

- Shows table comparing selected products
- Allow adding products to cart

### 7. Cart (no login required)

- Shows user's cart 
- Allows removing product from cart
- Increment product quantity
- Checkout button

\* If user logged in, fetch cart from DB. Otherwise use local storage.

\* Update DB with cart actions for logged in user.

\* Show header on all pages with login status and number of items in cart.

## Notes

1. Design DB structure to support all features

2. Divide work between team members - avoid crowding around one task

E.g. assign team members as owner of: DB structure, setting up git repo (private repo, adding developers, templates for ssh and tsconfig for members), environment

3. Help each other out

4. Recognize when you're stuck, call for team/staff help

5. Focus on functionality not design - leave design till end after core features done

6. Try to separate features so one member can own end-to-end (front + back)

7. Bonuses for extra technologies beyond core scope e.g. JWT, unit testing back end, PayPal/Stripe