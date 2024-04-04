const axios=require('axios')
//https://jsonplaceholde.typicode.com/posts
function fetchdata(url){
    axios.get(url)
    .then((result)=>{
        console.log(result.data);

    }).catch((error)=>{
        console.error('something is wrong');
    })
}
fetchdata('https://jsonplaceholder.typicode.com/posts')