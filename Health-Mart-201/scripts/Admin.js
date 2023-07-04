// Accesing All The elements From Html
let baseurl="https://mock-api-server-fkxx.onrender.com"
let TotalProductCount=document.getElementById("totalProducts")




// Getting Number of Products
fetch(`${baseurl}/data`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
       
})


function search(){
    let query = document.querySelector("#search").value;
    console.log(query);
    let newData = bag.filter(function(element){
        return element.brand.toLowerCase().includes(query.toLowerCase());
    });
    console.log(newData);
    displayData(newData);
}

