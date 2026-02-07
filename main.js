const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const notFoundHandle = require("./src/common/exception/not-found.handler");
const allExceptionHandler = require("./src/common/exception/all-exception.handler");
const mainRouter = require("./src/app.routes");
const cookieParser = require("cookie-parser");
dotenv.config();

main = async () => {
    const app = express();
    const port = process.env.PORT;
    require('./src/config/mongoose.config');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
    app.use(mainRouter);
    swaggerConfig(app);
    notFoundHandle(app);
    allExceptionHandler(app);

    app.listen(port, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

main();