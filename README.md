# foodpediawebs


## Description

This Food Pedia using 2 tech stack
* vite - React Js (Frontend)
* Nest Js (Backend)

There's 2 page that using middleware of Guard in frontend
* Search Food
* Login

On Search Food page you need to login first. if not u gonna kick out from that page.

## Requirement

* database
* nodejs 

## Frontend

First go to frontend folder
```bash
cd foodpedia/
```

1. Install all Depedency
```bash
npm i
```

2. Add new .env in root folder
```bash
VITE_API_URL=http://localhost:3000/
```

3. run the react-vite
```bash
npm run dev
```

## Backend
First go to backend folder
```bash
cd foodpedia-backend/
```

1. Install all Depedency
```bash
npm i
```

2. Add new .env in root folder and change the db store
```bash
DATABASE_URL="mysql://root:@localhost:3306/foodpediaaa"
```

3. Run the database migrate
```bash
npx prisma migrate dev --name init
```

4. Run the db seed
```bash
npx prisma db seed
```

5. run the nest js
```bash
npm run start:dev
```