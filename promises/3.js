const axios=require('axios')
var newData;
function fetchdata(url){
    axios.get(url)
    .then((result)=>{
        newData=(result.data);
        let filteredData = newData.filter((ele,i)=>{
            return ele.completed==true
        })
        console.log(filteredData);
    })
    .catch((error)=>{
        console.error('error')
    })

}
fetchdata('https://jsonplaceholder.typicode.com/todos')