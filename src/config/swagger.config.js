const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerConfig = (app) => {
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

    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/", swaggerUi.serve, swagger);
}



//const swaggerConfig = swaggerUi.setup(swaggerDocument,{});

module.exports = swaggerConfig;