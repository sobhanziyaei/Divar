const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
dotenv.config();

main = async () => {
    const app = express();
    const port = process.env.PORT;
    require('./src/config/mongoose.config');

    swaggerConfig(app);

    app.listen(port, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

main();