import express, { Router } from "express";
import userController from "./user.controller";

Router.get('/data',(req,res)=>{
    userController.getUserData(req,res)
})