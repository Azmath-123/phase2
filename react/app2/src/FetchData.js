import axios from "axios"
async function Fetch(){
    const res =await axios.get("https:/api.github.com/users")
    console.log(res.data[0].login);
    console.log(res. data[0].followers_url);
    
}
Fetch();