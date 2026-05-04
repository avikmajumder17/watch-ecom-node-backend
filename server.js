const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace("<DATABASE_PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, { dbName: "watch" })
    .then(() => console.log("Database connection is successful"))
    .catch(err => console.log("Database connection error", err));


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});