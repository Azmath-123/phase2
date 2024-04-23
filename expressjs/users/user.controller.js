// const express = require("express");
// const userService = require("./user.service.js");
import userService from "./user.service.js";

async function postUserData(req, res) {
  try {
    console.log("Inside userController : postUserData method");

    let userData = req.body;
    // console.log("from controller", userData);

    let response = await userService.postUserData(userData);

    if (response.status) {
      res.status(response.statusCode).json({
        message: response.message,
        // data : response.data
      });
    } else {
      res.status(response.statusCode).json({
        message: response.message,
      });
    }
  } catch (error) {
    console.log("Inside userController : postUserData method");
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getUserData(req, res) {
  try {
    console.log("Inside userController : getUserData method");

    let response = await userService.getUserData();

    if (response.status) {
      res.status(response.statusCode).json({
        message: response.message,
        data: response.data,
      });
    }
  } catch (error) {
    console.log("Inside userController : getUserData method");
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function signUpUser(req, res) {
  try {
    console.log("Inside userController : signUpUser method");
    // console.log(req.body);
    let response = await userService.signUpUser(req.body);
    if (response.status) {
      res.status(response.statusCode).json({
        message: response.message,
        data: response.data,
      });
    } else {
      res.status(response.statusCode).json({
        message: response.message,
      });
    }
  } catch (error) {
    console.log("Inside userController : signUpUser method");
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


async function loginUser(req, res) {
  try {
    console.log("Inside userController : loginUser method");
    let response = await userService.loginUser(req.body);
    if (response.status) {
      res.status(response.statusCode).json({
        message: response.message,
        data: response.data,
      });
    } else {
      res.status(response.statusCode).json({
        message: response.message,
      });
    }
  } catch (error) {
    console.log("Inside userController : loginUser method");
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


export default { postUserData, getUserData, signUpUser, loginUser };