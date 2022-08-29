# Apartment marketplace

Simple application for managing renting apartments marketplace. Main idea - simple admin panel for the marketplace, where users have the ability to create rent ads, sort, filter, edit or remove existing ones.

## Installation and running
### Backend

1. Install packages in `/backend` folder
```
yarn install
```

2. Create `config` folder in `/backend` directory and inside of this folder create `dev.env` file in following format:
```
MONGODB_URL=
PORT=
``` 

3. Run seeder
```
yarn run seed
```

4. Run backend
```
yarn run start
```
or with nodemon
```
yarn run dev
```

### Frontend
1. Install packages in `/frontend` folder
```
yarn install
```

2. Create `config` folder in `/frontend` directory and inside of this folder create `dev.env` file in following format:
```
REACT_APP_API_URL=
``` 

3. Run frontend
```
yarn run start
```
