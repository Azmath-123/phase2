import userService  from "./user.service.js";

function getUserData(req,res){
    try {
        console.log('Inside userController :get UserData method')
        let userId = req.params.userId;
        let response =userService.getUserData(userId);
        if(response.status){
            res.status(response.statusCode).json({
                message:response.message,
                data:response.data
            })
        }
    } catch (error) 
    {
        console.log('Inside userController :get UserData method')  
    return res.status(500).jason({error:"Internal Server Error"})
    }
}
export default{getUserData}