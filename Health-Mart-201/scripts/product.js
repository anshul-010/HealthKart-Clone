

let cart=JSON.parse(localStorage.getItem("cart")) ||[]

displaydata()
function displaydata(){
    let obj=JSON.parse(localStorage.getItem("product"))
console.log(obj)

document.getElementById("main")
MediaDeviceInfo.innerHTML=""
let pic=document.getElementById("pic")
let image=document.createElement("img")


image.src=obj[0].img

let pnb=document.createElement("div")
pnb.setAttribute("id","pnb")
let pnb2=document.createElement("h4")
pnb2.innerText="Product Benifits"
let pnb3=document.createElement("p")
pnb3.innerText="✔ Comprise of  WPI"
pnb.append(pnb2,pnb3)
let serve=document.createElement("div")
serve.setAttribute("id","serve")
let serving1=document.createElement("p")
serving1.innerText="Protein % per Serving"
let serving2=document.createElement("h3")
serving2.innerText="80.0"
serve.append(serving1,serving2)




pic.append(image,pnb,serve)


let data =document.getElementById("data")
let name1=document.createElement("h3")
name1.innerText=obj[0].description

let category=document.createElement("h4")
category.classList.add("catt")
category.innerHTML=` <h4>By <span style="color: rgb(11, 100, 100);">${obj[0].brand} ></span></h4>`

let rating2=document.createElement("div")
rating2.classList.add("rating")
let rating =document.createElement("p")
rating.innerText="💙💙💙💙🤍 "
let count=document.createElement("h4")
count.innerText=`4.0`
let total=document.createElement("h6")
total.innerText=` ( 18 Reviews)`
rating2.append(rating,count,total)

let mrp=document.createElement("p")
mrp.innerText=`MRP : ${obj[0].mrp}`
mrp.classList.add("per")

let showprice=document.createElement("div")
showprice.setAttribute("id","priceanddiscount")
let price=document.createElement("h3")
price.innerText=`Price : ${obj[0].Price}`
let discount=document.createElement("p")
discount.setAttribute("id","per")
discount.innerText=`${obj[0].Discount}off`
let hmcash=document.createElement("p")
hmcash.innerText="Get 34 HM Cash🪙"
showprice.append(price,discount,hmcash)

let shipping=document.createElement("div")
shipping.setAttribute("id","ship")
let shipdate=document.createElement("h6")
shipdate.innerText=`Get it by 7 Apr `
let freedelivery=document.createElement("h4")
freedelivery.innerText=" + Free Shipping"
shipping.append(shipdate,freedelivery)

let prime=document.createElement("button")
prime.innerText=`  ⭐ ₹${Math.floor(obj[0].Price-150)} for prime Members ➤`
let emi=document.createElement("p")
emi.innerText=`3 Month interest free payments of ₹${Math.floor(obj[0].Price/3)} with Easy EMI
`
let buy=document.createElement("div")
buy.setAttribute("id","buy")
let quan=document.createElement("div")
quan.setAttribute("id","quan")
            let inc= document.createElement("button")
            inc.addEventListener("click",()=>{
               
            })
            let quantity=document.createElement("span")
            let dec = document.createElement("button")
            inc.innerText="+"
            quantity.innerText=obj[0].quantity
            dec.innerText="-"
            dec.addEventListener("click",()=>{
               
               
            })        
quan.append(dec,quantity,inc)
let add=document.createElement("button")
add.setAttribute("id","addcart")
add.innerText="add to cart"
add.addEventListener("click",()=>{
    
    for(let i=0;i<cart.length;i++){
        if(cart[i].description==obj[0].description){
            return alert("product already in cart")
            
        }
    }
    alert("Product added to cart")
    cart.push(obj[0])
    localStorage.setItem("cart",JSON.stringify(cart))
})
let quickbuy=document.createElement("button")
quickbuy.addEventListener("click",()=>{
    alert("redirecting in payment page with this product")
})
quickbuy.setAttribute("id","quickbuy")
quickbuy.innerText="Quick Buy"
buy.append(quan,add,quickbuy)

let flavour=document.createElement("h3")

flavour.innerText=`🍨 Flavour`
let fbutton=document.createElement("div")
fbutton.setAttribute("id","flavour")
let f1=document.createElement("button")
f1.innerText="Unflavoured"
let f2=document.createElement("button")
f2.innerText="Jar flavoured"
fbutton.append(f1,f2)

let offer=document.createElement("h3")
offer.innerText=`Special Offers`

let offershow=document.createElement("div")
offershow.setAttribute("id","offershow")
let offer1=document.createElement("div")
let image1=document.createElement("img")
image1.src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/wallet/airtel-payment-bank.png"
let offer1text=document.createElement("p")
offer1text.innerText="Flat Rs.200 Cashback On Min. Order Of Rs.2000 For First Time Users Of Airtel Payments Bank On HealthKart. Offer Valid Till 31st March 2023 "
offer1.append(image1,offer1text)
let offer2=document.createElement("div")
let image2=document.createElement("img")
image2.src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/bank/icici.jpg"
let offer2text=document.createElement("p")
offer2text.innerText="Pay Using ICICI Net banking and get flat 300 Rs HM cashback "
offer2.append(image2,offer2text)
offershow.append(offer1,offer2)

let delivery=document.createElement("div")
delivery.setAttribute("id","delivery")
let ddate=document.createElement("h3")
ddate.innerText="Delivery & Services"
let ddate1=document.createElement("p")
ddate1.innerText="⛟ Delivery by 5 Apr. Free Shipping"
let ddate2=document.createElement("p")
ddate2.innerText="💰 Cash on Delivery Available"
let ddate3=document.createElement("p")
ddate3.innerText="👁️‍🗨️ This product is non-returnable."
delivery.append(ddate,ddate1,ddate2,ddate3)

let fssai=document.createElement("div")
fssai.setAttribute("id","fssai")
let fssai1=document.createElement("div")
let food=document.createElement("img")
food.src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fassai_logo.svg"
let lic=document.createElement("p")
lic.innerText="Lic. No. 10014000576"
fssai1.append(food,lic)
let fssai2=document.createElement("div")
let food2=document.createElement("img")
food2.src="https://static1.hkrtcdn.com/hknext/static/media/pdp/indian_flag.svg"
let lic2=document.createElement("p")
lic2.innerText="Country of Origin INDIA"
fssai2.append(food2,lic2)
fssai.append(fssai1,fssai2)
data.append(name1,category,rating2,mrp,showprice,shipping,prime,emi,buy,flavour,fbutton,offer,offershow,delivery,fssai)
}
// go to cart page ***********************
let cartt=document.getElementById("cart")
cartt.addEventListener("click",()=>{
  location.href="cart.html"
})