const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
        info: {
            title: "divar-backend",
            description: "divar-backend API Documentation",
            version: "1.0.0",
        }
    },
    apis: []
})