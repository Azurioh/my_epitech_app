import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT, process.env.URL, () => {
    console.log(`Server started at the URL: http://${process.env.URL}:${process.env.PORT}`);
});