# Apartment marketplace

Simple application for managing renting apartments marketplace. Main idea - simple admin panel for the marketplace, where users have the ability to create rent ads, sort, filter, edit or remove existing ones.

## Installation and running
### Start database
```
sudo mongod --port 27017 --dbpath path/to/data/db
```

### Backend

1. Install packages in `/backend` folder with
```
yarn install
```

2. Create `config` folder in `/backend` directory and inside of this folder create `dev.env` file in following format:
```
MONGODB_URL=mongodb://127.0.0.1:27017/apartment-marketplace-db
PORT=3000
``` 
where `MONGODB_URL` is database connection url, `PORT` is a port number

3. Run database seeder
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
1. Install packages in `/frontend` folder with
```
yarn install
```

2. Create `config` folder in `/frontend` directory and inside of this folder create `dev.env` file in following format:
```
REACT_APP_API_URL=http://localhost:3000
```
where `REACT_APP_API_URL` is your backend url

3. Run frontend
```
yarn run start
```
