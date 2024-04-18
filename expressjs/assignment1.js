const express =require('express' )
const app = express()
const port = 8080
 app.get('/',(req,res)=>{
     res.send('')
})
app.get()

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
