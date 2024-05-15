import express from 'express';
const app = express();
const port =8085;

//json

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Express Is Up")
});
app.listen(port,()=>{
    console.log(`server is Up at port ${port}`) 
})

