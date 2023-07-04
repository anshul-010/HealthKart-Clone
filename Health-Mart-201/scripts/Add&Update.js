// Accesing All The elements From Html
const baseurl="https://mock-api-server-fkxx.onrender.com";
let Id=document.getElementById("id");
let MRP=document.getElementById("mrp");
let Discount=document.getElementById("dis");
let brand=document.getElementById("brand");
let Desc=document.getElementById("description");
let Price=document.getElementById("price");
let rating=document.getElementById("producttype");
let img=document.getElementById("imageurl");
let AddButton=document.getElementById("Add");
let UpdateButton=document.getElementById("Update");
let GetButton=document.getElementById("Get");

let Idvalue=Id.value;
let TotalProductCount=document.getElementById("totalProducts");
let updateimage=document.getElementById("updateImage");

let showbrand=document.getElementById("h3Brand");
let showname=document.getElementById("h3name");
let showprice=document.getElementById("h3price");
let showdesc=document.getElementById("desc");




// Getting Number of Products
fetch(`${baseurl}/data`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
    })




// adding the Product to API

AddButton.addEventListener("click",()=>{
    let obj={
        brand:brand.value,
        description:Desc.value,
        Price:Price.value,
        img:img.value,
        mrp:MRP.value,
        Discount:Discount.value,
        id:Id.value,
        // Size:[8,8.5,9,10,10.5,11,13],
        // color:["Black"],
        rating:rating.value
    };
    console.log(obj)
   
    fetch(`${baseurl}/data`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
        console.log(data)
        alert("Product Added Succesfully")
    })
})


// Getting the Product from API

GetButton.addEventListener("click",()=>{
    let obj={
        id:Id.value
    };
    
    fetch(`${baseurl}/data/${obj.id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        brand.value=data.brand;
        MRP.value=data.mrp;
        Desc.value=data.description;
        Discount.value=data.Discount

        Price.value=data.Price;
        rating.value=data.rating;
        img.value=data.src.img;
        updateimage.src=data.img;
        showbrand.innerText=data.brand;
        showname.innerText=data.name;
        showdesc.innerText=data.description;
        showprice.innerText=data.Price;

    })


})



// Updating The Product From API

UpdateButton.addEventListener("click",()=>{
    let obj={
        brand:brand.value,
        description:Desc.value,
        Price:Price.value,
        img:img.value,
        mrp:MRP.value,
        Discount:Discount.value,
        id:Id.value,
        // Size:[8,8.5,9,10,10.5,11,13],
        // color:["Black"],
        rating:rating.value
    };
    console.log(obj)
   
    fetch(`${baseurl}/data/${obj.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)

    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
       alert("Product Updated Succesfully")
    })
    .catch((error)=>{
        console.log(error)
    })


})

