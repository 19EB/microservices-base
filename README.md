
# microservices-base

  

Basic microservices project that includes a gateway (api-gateway) and 3 microservices (user/product/client)

This is just my personal project experimenting how the architecture works. 
  

### Prerequisites

  

- Install [Node.js](https://nodejs.org/en/)

  

### Installing

- Clone the repository

```

git clone https://github.com/19EB/microservices-base

```

- Install dependencies on api-gateway

```

cd api-gateway

npm install

```
- Install dependencies on each microservice (user, product and client)
```

cd services/<microservice>

npm install

```

### Environment variables

This project uses the following environment variables:
##### api-gateway
```
# Port
PORT=8000
# User service
USER_SERVICE_URL='http://localhost:8001'
# Client service
CLIENT_SERVICE_URL='http://localhost:8002'
# Product service
PRODUCT_SERVICE_URL='http://localhost:8003'
```

##### user
```
# Database
DB=''
# Service port
PORT=8001
# Other services
CLIENT_SERVICE_URL='http://localhost:8002'
PRODUCT_SERVICE_URL='http://localhost:8003'
```
##### client
```
# Database
DB=''
# Service port
PORT=8002
# Other services
USER_SERVICE_URL='http://localhost:8001'
PRODUCT_SERVICE_URL='http://localhost:8003'
```
##### product
```
# Database
DB=''
# Service port
PORT=8003
# Other services
USER_SERVICE_URL='http://localhost:8001'
CLIENT_SERVICE_URL='http://localhost:8002'
```


### Running the project

- Start each microservice from its own directory

Development mode
```
cd services/<microservice>

npm run dev
```
Production mode
```
cd services/<microservice>

npm start
```

- Start the api-gateway
```
cd api-gateway

npm start

or

npm run dev
```
Navigate to `http://localhost:8000`

### Endpoints

The project has couple endpoints to ping each other and one normal endpoint.

  

`http://localhost:8000/user/list`

`http://localhost:8000/user/ping-client`

`http://localhost:8000/user/ping-product`

  

`http://localhost:8000/client/list`

`http://localhost:8000/client/ping-user`

`http://localhost:8000/client/ping-product`

  

`http://localhost:8000/product/list`

`http://localhost:8000/product/ping-user`

`http://localhost:8000/product/ping-client`

  

## License

  

This project is licensed under the MIT License
