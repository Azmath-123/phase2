const axios=require('axios')
//https://jsonplaceholde.typicode.com/posts
function fetchdata(username){
    axios.get(username)
    .then((result)=>{
        console.log(result.data);

    }).catch((error)=>{
        console.error('something is wrong');
    })
}
fetchdata('https://github.com/Azmath-123')