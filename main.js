const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

main = async () => {
    const app = express();
    const port = process.env.PORT;
    require('./src/config/mongoose.config');

    app.listen(port, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

main();