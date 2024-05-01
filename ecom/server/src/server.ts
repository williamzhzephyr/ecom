import express from "express";
import welcomeRouter from "./routes/welcome";
import sql from 'mssql';

var config = {
    user: "AzureAD\\WilliamZhang",
    password: "",
    server: "",
    database: "",
}

const app = express();
const port: number = 5000;

app.use("/api", welcomeRouter);
app.listen(port, () => console.log("listening on port " + port));