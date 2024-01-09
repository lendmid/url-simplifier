# Url Simplifier

To start the project it needs
1) To have installed docker-compose
2) Run the command: `docker compose up -d --build`

##### The result:
[![N|Solid](https://i.ibb.co/3cktRV6/Screenshot-2024-01-09-at-3-49-20.png)](https://nodesource.com/products/nsolid)

##### The implementation issues:
1) It my first project from scratch with nest.js. It took time to figure out with nest.js general approach to architecture, modules, imports decorators and resolve TypeScript issues on the way
2) Configuration nest.js with client app inside docker-compose 
3) env variables locally and inside docker-compose 

##### Tech stask 
- **Backend:** nest.js, typeorm, redis, typescript
- **Frontend:** react, typescript, antd