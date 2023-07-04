// Accessing all the elements from HTML
let tbody=document.getElementById("ProductDetails");

let bag = [];

// Fetching Data From API

fetch("https://mock-api-server-fkxx.onrender.com/data")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
    console.log(actData);
    bag=actData;
    Products(bag)
})
.catch((error)=>{
    console.log(error)
})



// Creating Dom

function Products(bag){

    // Creating elements For Each Products

    bag.forEach(function(product,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=product.id;
        let Brand=document.createElement("td");
        Brand.innerText=product.brand;
        let Name=document.createElement("td");
        Name.innerText=product.brand;
        let Rating=document.createElement("td");
        Rating.innerText=product.rating;
        let Price=document.createElement("td");
        Price.innerText= product.Price;
        let Imagetd=document.createElement("td");
        let Image=document.createElement("img");
        Image.setAttribute("src",product.img);


        // Appending Created Elements
        Imagetd.append(Image);
        div.append(ID,Brand,Name,Rating,Price,Imagetd);
        tbody.append(div);

    })

    
}


function search(){
    let query = document.querySelector("#search").value;
    console.log(query);
    let newData = bag.filter(function(element){
        return element.brand.toLowerCase().includes(query.toLowerCase());
    });
    console.log(newData);
    Products(newData);
}


