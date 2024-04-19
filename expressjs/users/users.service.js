function getUserData(userId){
    try {
        console.log("we are in service");
        return {
            message:"job was done",
            data:userId,
            status:true,
            statusCode:200
        }
    } catch (error) 
    {
    return{
        message :"Internal server error",
        status:false
    }
    }
}
export default {getUserData}