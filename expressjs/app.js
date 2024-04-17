const express =require('express' )
const app = express()
const port = 8080
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
app.get('/home',(req,res)=>{
    console.log(req.query);
    res.send('lets get biryani tonight')
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
