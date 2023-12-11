# Golden Owl JS Intern Assignment: G-Sneaker (BE)
From: Hai Truong

## Getting Started

First, run the installation script:
```bash
npm install
# or
yarn
```

Second, copy `.env.example` to `.env` and add all missing values.

**Note:** I only tested on PostgreSQL database

Third, run the `seed` script to populate sample data:

```bash
npm run seed
# or
yarn seed
```

Third, run the development server:

```bash
npm run start:dev
# or
yarn start:dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the "Hello Word" and go to API endpoints to see corresponding responses.

## Swagger

To access swagger, go to http://localhost:3001/api

## Postman
To import the g-sneaker Postman collection, use the files located in the `postman` folder

## Deploy on Render

The project is deployed on Render, here is the link: [https://g-sneaker-be-1fu6.onrender.com/](https://g-sneaker-be-1fu6.onrender.com/)

## Edit after deadline (16:00 Friday 08 December, 2023)

After deadline, I've:
- Created `seed` script in `package.json`
- Added validation
- Created `Swagger`
- Added the Postman collection
