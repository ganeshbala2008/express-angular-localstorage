Data store application is made up of node js (express framework) and angular 8. This application store the user data in the form of json in a directory. If you wish to have optional path pass argument --STORAGE_DIRECTORY on build or dev. The storage is powered with node-persist.

Pre requisties:
Node : 12

Running docker-compose up --build will run the application, 
port configuration
Nodejs  - 3000
Angular - 4200

For local,
 -> Run ng serve on angular-client folder
 -> Run npm run dev 

For api reference, localhost:3000

If you like to run development on local machine,
For express - express-server -> npm run dev
For angular - angular-client -> ng serve

Builds:
For express -> npm run build
For angular -> ng build


For dockerized version,
steps:
1) Run docker build -t angular-client:dev . at angular-client folder
2) Run  docker build -t express-server:dev . at express-server folder
3) Run docker compose up at project root folder
4) Navigate to localhost:4200 you can see the project is running!
 
Angular server - 172.16.238.05
Express server - 172.16.238.06

For test cases,
Run npm run test

