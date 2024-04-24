import express from "express";
import userRouter from "./users/user.routes.js";
import taskRoutes from './tasks/tasks.routes.js';
// const express = require('express');
// const userRouter = require("./users/user.routes.js");

const app = express();

const port = 8080;

app.use(express.json());

//App LEVEL
app.use((req, res, next) => {
  console.log(`Server got a request at ${new Date()}`);
  req.payload = "azmath";
  next();
});
app.use('/user',userRouter);
app.use('/task',taskRoutes);
app.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});