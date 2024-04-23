import express from 'express'
import fs from "fs/promises";
import bcrypt from "bcrypt";
// const express = require('express');
// const fs= require('fs/promises')

async function postUserData(userData) {
  try {
    console.log("Inside UserService : postUserData method");
    // console.log('i m inside services',userData);

    let readFile = await fs.readFile("user.data.json");
    // console.log('issue',readFile);
    let fileData = JSON.parse(readFile);

    fileData.push(userData);
    // console.log('line 9',fileData);

    fileData = JSON.stringify(fileData);
    // console.log(fileData);

    await fs.writeFile("user.data.json", fileData);

    return {
      message: "User Added Successfully",
      status: true,
      statusCode: 200,
    };
  } catch (error) {
    console.log("Inside UserService Error: postUserData method");
    // console.log(error);
    return {
      message: "Internal Server Error",
      status: false,
    };
  }
}

async function getUserData() {
  try {
    console.log("Inside UserService : getUserData method");

    let readFile = await fs.readFile("user.data.json");
    let userData = JSON.parse(readFile);
    return {
        message: "User Displayed Successfully",
        data: userData,
        status: true,
        statusCode: 200,
      };}
   catch (error) {
      console.log("Inside UserService : getUserData method");
      return {
        message: "Internal Server Error",
        status: false,
      };
    }}
  async function signUpUser(body) {
    try {
      console.log("Inside UserService : signUpUser method");
      console.log(body);
      //Check For Both Passwords
      if (body.password !== body.password2) {
        return {
          message: "Passwords do not match",
          // data :'',
          status: false,
          statusCode: 400,
        };
      }
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      //We check if the Email is Unique or Not
      let findUser = fileData.find((ele) => ele.email == body.email);
      if (findUser) {
        return {
          message: "User already Exists, please login",
          // data :'',
          status: false,
          statusCode: 409,
        };
      }
      delete body.password2;
      // let hashedPassword = await bcrypt.hash(body.password,11);
      body.password = await bcrypt.hash(body.password, 11);
  
      fileData.push(body);
      await fs.writeFile("data.json", JSON.stringify(fileData));
  
      return {
        message: "User signedUp successfully",
        // data :,
        status: true,
        statusCode: 200,
      };
    } catch (error) {
      console.log(
        "Inside UserService : signUpUser method, error while signingUp a user"
      );
      console.log(error);
      return {
        message: "Internal Server Error",
        status: false,
      };
    }
  }
  async function loginUser(body) {
    try {
      console.log("Inside UserService : loginUser method");
      
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      
      //Check if the User exist or Not
      let findUser = fileData.find((ele) => ele.email == body.email);
      if (!findUser) {
        return {
          message: "User Does not Exists, please signUp",
          // data :'',
          status: false,
          statusCode: 409,
        };
      }
      //... check for pass hash.
      const match = await bcrypt.compare(body.password, findUser.password); 
      if (!match) {
        return {
          message: "Invalid Credentials",
          // data :'',
          status: false,
          statusCode: 404,
        };
      }
      return {
        message: "user login successfully",
        // data :'',
        status: true,
        statusCode: 200,
      };
    } catch (error) {
      console.log("Inside UserService : loginUser method, login error");
      return {
        message: "Internal Server Error",
        status: false,
      };
    }
  }
  
  export default { postUserData, getUserData, signUpUser, loginUser };