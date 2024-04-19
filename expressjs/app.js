import express from "express"
import fs from "fs/promises"
const app = express()
const port = 8080
app.use(express.json())
 app.get('/',(req,res)=>{
     res.send('hello world!')
})
// app.get('/home',(req,res)=>{
//     res.send('hi express')
// } )
// app.get('/apply',(req,res)=>{
//     setTimeout(()=>{
//         res.send('welcome to server')
//     },2000);
// })  
// app.get('/home',(req,res)=>{
//     let userData = req.body;
//     console.log(userData);
//     // console.log(req.query);
//     // console.log(req.headers);
//     // console.log(req.body);
//     res.send('lets get biryani tonight')
// })

// app.post('/home',async (req,res)=>{
//     let userData = req.body;
//     //console.log(userData);
    
//     let file=await fs.readFile("data.json")
//     file=JSON.parse(file)
//     file.push(userData);
//     console.log(file);
//     file=JSON.stringify(file)
//     console.log(file)
//     await fs.writeFile('data.json',file)
//         // console.log(req.query);
//     // console.log(req.headers);
//     // console.log(req.body);
//     res.send('lets get biryani tonight')
// })
// app.get('/users',async(req,res)=>{
//     let file=await fs.readFile("data.json")
//     file=JSON.parse(file)
//     res.status(200).json(file)

// })

app.use((req,res,next)=>{
console.log(`server got a request at ${new Date()}`);
req.payload="azmath"
next;
})
app.use('/user',userRoutes)



app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
