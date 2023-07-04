// Accessing all the elements from HTML
let tbody=document.getElementById("ProductDetails");
let image="https://www.google.com/imgres?imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F03%2F46%2F38%2F39%2F360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddelete&tbnid=7CJRL_9ckA7TXM&vet=12ahUKEwiOrrLm-9b8AhUZgGMGHVPHCuEQMygsegUIARDEAg..i&docid=BhP2LzDdiYNIYM&w=360&h=360&q=delete%20%20image&hl=en&ved=2ahUKEwiOrrLm-9b8AhUZgGMGHVPHCuEQMygsegUIARDEAg"
let baseurl="https://mock-api-server-fkxx.onrender.com"



// Fetching Data From API

fetch("https://mock-api-server-fkxx.onrender.com/data")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
    Products(actData)
})
.catch((error)=>{
    console.log(error)
})



// Creating Dom

function Products(Data){

    // Creating elements For Each Products

    Data.forEach(function(product,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=product.id;
        let Brand=document.createElement("td");
        Brand.innerText=product.brand;
        let Name=document.createElement("td");
        Name.innerText=product.brand;
        let ProductType=document.createElement("td");
        ProductType.innerText=product.rating;
        let Price=document.createElement("td");
        Price.innerText=product.Price;
        let Imagetd=document.createElement("td");
        let Image=document.createElement("img");
        Image.setAttribute("src","blue.delete.png");


        // Deleting function onclicking
        Imagetd.addEventListener("click",()=>{

            console.log(product.id);

            fetch(`${baseurl}/data/${product.id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
        
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
               alert("Product Deleted Succesfully")
            })
            .catch((error)=>{
                console.log(error)
            })
        })


        // Appending Created Elements
        Imagetd.append(Image);
        div.append(ID,Brand,Name,ProductType,Price,Imagetd);
        tbody.append(div);

    })

    
}

