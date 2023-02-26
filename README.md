# Casino
This is a web app where you can play poker, blackjack or slot machines without having money irl :)

## How to run the app
Inside the main directory (`<PATH_TO_DIR>/Casino`) run:
```
npm i
```
to install dependencies
```
npm start
```
to run the project

## Configuration
Inside the `config` folder in the main directory there's a configuration file. It contains server and database infos:
- server
  - `host`: the domain of the web app
  - `port`: the port of the host
- database
  - `host`: the domain for the database
  - `port`: the port of the host
  - `user`: value of the username to access the database
  - `password`: value of the password to access the database
  - `database_name`: name of the database to connect
