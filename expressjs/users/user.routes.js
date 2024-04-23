import express from 'express'
import userController from "./user.controller.js";
// const express = require("express");
// const userController = require ("./user.controller.js");


const router = express.Router()

router.post('/user-add', (req,res)=>{
    userController.postUserData(req,res)
})

router.get("/get-user", (req, res) => {
  userController.getUserData(req, res);
});


router.post("/signup", (req, res) => {
  userController.signUpUser(req, res);
});

router.post("/login", (req, res) => {
  userController.loginUser(req, res);
});




export default router;