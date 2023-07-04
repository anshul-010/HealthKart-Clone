let container=document.getElementById("container")
    let cart = JSON.parse(localStorage.getItem("cart")) 
   let payment=document.getElementById("payment")
  console.log(cart)
    function displaydata() {

        container.innerHTML = ""
        
cart.forEach((res)=>{
    
    let card = document.createElement("div")
    card.setAttribute("id","card")
    let image1=document.createElement("div")
    image1.setAttribute("class","pimage")
    let details1=document.createElement("div")
    details1.classList.add("details1")
            let image = document.createElement("img")
            let name = document.createElement("h3")
            let price = document.createElement("h4")
            let cprice=document.createElement("p")
            cprice.innerHTML=`MRP: ₹ <span id="cprice">${res.mrp}</span>`
           
            let category = document.createElement("h6")
            let remove = document.createElement("button")
            remove.classList.add("buttonss")
            let inc= document.createElement("button")
            let quantity=document.createElement("span")
            quantity.classList.add("qn")
            let dec = document.createElement("button")
            inc.classList.add("buttonss")
            dec.classList.add("buttonss")
           


            
           
          
            category.innerText = res.brand
            name.innerText = res.description
            image.src = res.img
            price.innerHTML =`₹ ${res.Price} <span id="colr">${res.Discount} OFF</span><span id="hmcash" class="hmcash2"> Get ${Math.floor(res.mrp/60)} HM Cash🪙</span>`
            inc.innerText="+"
            quantity.innerText=res.quantity
            dec.innerText="-"
            remove.innerText = "remove"
          
            remove.addEventListener("click",()=>{
                cart=cart.filter((ele)=>{
                    return ele.id!=res.id
                })
                localStorage.setItem("cart",JSON.stringify(cart))
            displaydata()
            })
                 
          

inc.addEventListener("click",()=>{
    res=res.quantity++
    localStorage.setItem("cart",JSON.stringify(cart))
    displaydata()
})

dec.addEventListener("click",()=>{

    if(res.quantity>1){
        res=res.quantity--
    localStorage.setItem("cart",JSON.stringify(cart))
    displaydata()
    }
    
})
           
    let sum=0
    let sum2=0
    let pay=document.getElementById("Total-Pay")
    let pay2=document.getElementById("totalmrp")
pay.addEventListener("click",()=>{
    location.href="address.html"
})
    for(let i=0;i<cart.length;i++){
        sum+=cart[i].Price*cart[i].quantity
        sum2+=cart[i].mrp*cart[i].quantity
    }
    let paytm=document.getElementById("paytm")
    let free=document.getElementById("free")
    paytm.innerText="₹ "+sum
    pay.innerText= "Proceed to Pay ₹ "+sum
    pay2.innerText= " ₹ "+sum2
let totalitem=document.getElementById("totalitem")
totalitem.innerText=`(${cart.length} items)`
let totaldiscount=document.getElementById("totaldiscount")
free.innerText=` You will Save ₹${cart.length*150} & Earn ₹14 HK Cash on this order `
totaldiscount.innerText=`-₹${cart.length*150} `
            image1.append(image)
            details1.append( name, price,cprice, category,dec,quantity,inc , remove)
            card.append(image1,details1)
            container.append(card)
            let copoun=document.getElementById("copoun")
          let try2 =document.getElementById("try")
    let csubmit=document.getElementById("csubmit")
    
    csubmit.addEventListener("click",()=>{
        if(copoun.value=="T20"){
            pay.innerText="Proceed to Pay ₹ "+(sum-200)
            paytm.innerText="₹ "+(sum-200)
        }
        if(copoun.value=="T30"){
            pay.innerText="Proceed to Pay ₹ "+(sum-300)
            paytm.innerText="₹ "+(sum-300)
        }
        if(copoun.value=="T40"){
            pay.innerText="Proceed to Pay ₹ "+(sum-400)
            paytm.innerText="₹ "+(sum-400)
        }
    })
})

        

    }
    displaydata()

    let cattt=document.getElementById("header")
    cattt.addEventListener("click",()=>{
        location.href="index.html"
    })