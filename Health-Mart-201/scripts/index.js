

// slider code*******************
const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// slider code end*************

let displayData = document.getElementById("product-items")
let displayData2 = document.getElementById("12-product-items")
let products = JSON.parse(localStorage.getItem("cart")) || [];
let API = "All Data/primary.json"
fetchData(API)
function fetchData(API){
    fetch(API)
    .then((res)=>{
        return res.json()
    })
    .then((Data)=>{
        console.log(Data.data)
        appendData(Data.data)
        // console.log(card)

    })
}


function appendData(items){
  
    displayData.innerHTML = null
    items.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class","card")
        card.setAttribute("id","card")

       //card details page
      //  card.addEventListener("click",()=>{
      //   let carddata2=[]
      //   let obj={
      //     description : element.description,
      //   price:element.price,
      //   mrp : element.mrp,
      //   discount: element.Discount,
      //   image : element.img,
      //   brand : element.brand,
      //   quantity : element.quantity
      // }
      // carddata2.push(obj)
      // localStorage.setItem("product",JSON.stringify(carddata2))
      // location.href="product.html"
      //  })


        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("class","img")
        imgdiv.setAttribute("id","img")

        imgdiv.addEventListener("click",()=>{
          let carddata2=[]
          let obj={
          description : element.description,
          Price:element.Price,
          mrp : element.mrp,
          Discount: element.Discount,
          img : element.img,
          brand : element.brand,
          quantity : element.quantity
        }
        carddata2.push(obj)
        localStorage.setItem("product",JSON.stringify(carddata2))
        location.href="product.html"
         })


        let image = document.createElement("img")
        image.setAttribute("src",element.img)

        let infodiv = document.createElement("div")
        infodiv.setAttribute("class","info")
        infodiv.setAttribute("id","info")

        let descdiv = document.createElement("div")
        descdiv.setAttribute("class","desc")
        descdiv.setAttribute("id","desc")

        let desc = document.createElement("p")
        desc.innerText = element.description

        let pricediv = document.createElement("div")
        pricediv.setAttribute("class","price")
        pricediv.setAttribute("id","price")

        let price = document.createElement("h3")
        price.innerText = "₹"+element.Price
        
        let mrp = document.createElement("h3")
        mrp.innerText = "₹"+element.mrp
        let discount = document.createElement("h4")
        discount.innerText = `${element.Discount} off`

        let primediv = document.createElement("div")
        primediv.setAttribute("class","prime")

        let primeimg = document.createElement("img")
        primeimg.setAttribute("src","https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg")
        let primeinfo = document.createElement("p")
        primeinfo.innerText = `₹${element.Price-150} for Premium Members`

        let btndiv = document.createElement("div")
        btndiv.setAttribute("class","btn")
        btndiv.setAttribute("id","btn")

        btndiv.addEventListener("click", () => {
            let flag = true;
            for (let item in products) {
              if (products[item].id == element.id) {
                flag = false;
              }
            }
            if (flag == true) {
              let protienMass = {...element};
              products.push(protienMass);
              localStorage.setItem("cart", JSON.stringify(products));
              alert("Product added to cart 😊");
            } else {
              alert("Product already in cart 😀");
            }
          
          });




        let cartimg = document.createElement("img")
        cartimg.setAttribute("src","All images/shopingCart.png")
        let text = document.createElement("p")
        text.innerText = "Add To Cart"


        btndiv.append(cartimg,text)
        primediv.append(primeimg,primeinfo)
        descdiv.append(desc)
        pricediv.append(price,mrp,discount)
        infodiv.append(descdiv,pricediv,primediv,btndiv)
        imgdiv.append(image)
        card.append(imgdiv,infodiv)
        displayData.append(card)
        
    });
    
}




fetchData2(API)
function fetchData2(API){
    fetch(API)
    .then((res)=>{
        return res.json()
    })
    .then((Data)=>{
        console.log(Data.data2)
        appendData2(Data.data2)
        // console.log(card)

    })
}


function appendData2(items){
    // displayData.innerHTML = null
    items.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class","card")
        card.setAttribute("id","card")

        //card details page
        // card.addEventListener("click",()=>{
        //   let carddata2=[]
        //   let obj={
        //     description : element.description,
        //   price:element.price,
        //   mrp : element.mrp,
        //   discount: element.Discount,
        //   image : element.img,
        //   brand : element.brand,
        //   quantity : element.quantity
        // }
        // carddata2.push(obj)
        // localStorage.setItem("product",JSON.stringify(carddata2))
        // location.href="product.html"
        // })
        
        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("class","img")
        imgdiv.setAttribute("id","img")

        imgdiv.addEventListener("click",()=>{
          let carddata2=[]
          let obj={
          description : element.description,
          Price:element.Price,
          mrp : element.mrp,
          Discount: element.Discount,
          img : element.img,
          brand : element.brand,
          quantity : element.quantity
        }
        carddata2.push(obj)
        localStorage.setItem("product",JSON.stringify(carddata2))
        location.href="product.html"
         })



        let image = document.createElement("img")
        image.setAttribute("src",element.img)

        let infodiv = document.createElement("div")
        infodiv.setAttribute("class","info")
        infodiv.setAttribute("id","info")

        let descdiv = document.createElement("div")
        descdiv.setAttribute("class","desc")
        descdiv.setAttribute("id","desc")

        let desc = document.createElement("p")
        desc.innerText = element.description

        let pricediv = document.createElement("div")
        pricediv.setAttribute("class","price")
        pricediv.setAttribute("id","price")

        let price = document.createElement("h3")
        price.innerText = "₹"+element.Price
        
        let mrp = document.createElement("h3")
        mrp.innerText = "₹"+element.mrp
        let discount = document.createElement("h4")
        discount.innerText = `${element.Discount} off`

        let primediv = document.createElement("div")
        primediv.setAttribute("class","prime")

        let primeimg = document.createElement("img")
        primeimg.setAttribute("src","https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg")
        let primeinfo = document.createElement("p")
        primeinfo.innerText = `₹${element.Price-150} for Premium Members`

        let btndiv = document.createElement("div")
        btndiv.setAttribute("class","btn")
        btndiv.setAttribute("id","btn")

        btndiv.addEventListener("click", () => {
          let flag = true;
          for (let item in products) {
            if (products[item].id == element.id) {
              flag = false;
            }
          }
          if (flag == true) {
            let protienMass = {...element};
            products.push(protienMass);
            localStorage.setItem("cart", JSON.stringify(products));
            alert("Product added to cart 😊");
          } else {
            alert("Product already in cart 😀");
          }
        
        });



        let cartimg = document.createElement("img")
        cartimg.setAttribute("src","All images/shopingCart.png")
        let text = document.createElement("p")
        text.innerText = "Add To Cart"


        btndiv.append(cartimg,text)
        primediv.append(primeimg,primeinfo)
        descdiv.append(desc)
        pricediv.append(price,mrp,discount)
        infodiv.append(descdiv,pricediv,primediv,btndiv)
        imgdiv.append(image)
        card.append(imgdiv,infodiv)
        displayData2.append(card)
        
    });
    
}

// ************login page JS*************
let userDetail=localStorage.getItem('userData')||null;
// login btn
let loginBtn=document.getElementById('logBtn');
loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('loginWrapper').style.opacity=1;
    document.getElementById('loginWrapper').style.zIndex=2;
})

let closBtn =document.getElementById('closeBtn');
closBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('loginWrapper').style.opacity=0;
    document.getElementById('loginWrapper').style.zIndex=-1;
    document.getElementById('formWrapper').style.display='block';
    document.getElementById('verifyPage').style.display='none';
    document.getElementById('registerPage').style.display='none';
})


// slide Images

const slides = document.querySelectorAll(".slide");

var counter = 0;

slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

const slideImage =()=>{
    counter++;
    if(counter>2){
        counter=0;
    }
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`;
    })
}
setInterval(slideImage,5000);


// mobile no. input
let MobileNo=JSON.parse(localStorage.getItem('moNo'))||[];

let mobileNo;
let xOtp;

// get Otp Button 

let getOtp=document.getElementById('loginForm');
getOtp.addEventListener('submit',function(e){
    e.preventDefault()
    mobileNo=document.getElementById('mobile').value;
    xOtp = Math.floor(Math.random()*10000);
    alert(`your OTP is ${xOtp}`);
    document.getElementById('formWrapper').style.display='none';
    document.getElementById('verifyPage').style.display='block';
    document.getElementById('varifyMob').innerText=mobileNo;
})

// edit Mob No.
let editMob=document.getElementById('editMob');
editMob.addEventListener('click',function(){
     document.getElementById('formWrapper').style.display='block';
    document.getElementById('verifyPage').style.display='none';
})

// otp submit Button 

let contBtn=document.getElementById('contBtn');
contBtn.addEventListener('click',function(){
    let inpOtp=document.getElementById('otp');
    if(inpOtp.value==xOtp){
        alert('Mobile Number verified');
        document.getElementById('verifyPage').style.display='none';
    document.getElementById('registerPage').style.display='block';
    }else{
        alert('Please enter Right OTP');
    }
})

// regiser Button

let regBtn = document.getElementById('regBtn');
regBtn.addEventListener('click',function(){
    let username=document.getElementById('name');
    let email=document.getElementById('email');
    let gender=document.getElementById('gender');
    
    let userObj={
        username:username.value,
        email:email.value,
        gender:gender.value,
        mobile:mobileNo,
    }
    localStorage.setItem('userData',JSON.stringify(userObj));
})



// ++++++++++++++++++++++++++++++++++++++
let showUsername=document.getElementById('showUsername');
let userData=JSON.parse(localStorage.getItem('userData'))||null;
if(userData!==null){
  document.getElementById('logBtn').style.display='none';
  document.getElementById('userIcon').style.display='block';
  showUsername.innerText=userData.username;

  let logOutBtn=document.createElement('button');
  logOutBtn.innerText='Log Out';
  document.getElementById('login').append(logOutBtn);

  logOutBtn.addEventListener('click',function(){
    localStorage.removeItem("userData");
    document.getElementById('logBtn').style.display='block';
    showUsername.innerText=null;
    logOutBtn.style.display='none';
    document.getElementById('userIcon').style.display='none';
  })
}




// ******************login page js end*********************

let goto = document.querySelector(".image")
goto.addEventListener("click",()=>{
  console.log("goto")
  location.href="allproducts.html"
})

let Goto = document.getElementById("goto")
Goto.addEventListener("click",()=>{
  console.log("goto")
  location.href="allproducts.html"
})

let gotoWithSlider = document.getElementById("slider")

gotoWithSlider.addEventListener("click",()=>{
  location.href="allproducts.html"  
})
// go to cart page ***********************
let cartt=document.getElementById("cart")
cartt.addEventListener("click",()=>{
  location.href="cart.html"
})


