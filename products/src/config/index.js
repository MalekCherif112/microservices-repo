const dotEnv= require("dotenv").
config({path: process.env.NODE_ENV!== 'prod' && 
"C:\\Users\\cheri\\Desktop\\Microservices\\nodejs_microservice-master\\products\\.env"})

module.exports = {

    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME:  "ONLINE_SHOPPING",
    SHOPPING_BINDING_KEY: "SHOPPING_SERVICE",
    CUSTOMER_BINDING_KEY: "CUSTOMER_SERVICE"
    //2 binding keys :we are gonna publish to both customer and shopping services
}
 