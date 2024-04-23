import express from "express";
import userRouter from "./users/user.routes.js";
// const express = require('express');
// const userRouter = require("./users/user.routes.js");

const app = express();

const port = 8080;

app.use(express.json());

//App LEVEL
app.use((req, res, next) => {
  console.log(`Server got a request at ${new Date()}`);
  req.payload = "ahmed Irshad 72";
  next();
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});