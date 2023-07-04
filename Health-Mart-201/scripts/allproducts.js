let displayData = document.getElementById("products")
let products = JSON.parse(localStorage.getItem("cart")) || [];
let API = "https://mock-api-server-fkxx.onrender.com/data"
let newDataArr = [];
fetchData(API)
function fetchData(API){
    fetch(API)
    .then((res)=>{
        return res.json()
    })
    .then((Data)=>{
        console.log(Data)
        appendData(Data)
        newDataArr = [...Data];
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
          quantity : element.quantity,
          name : "hiise"
        }
        console.log(obj)
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

        let brand = document.createElement("p")
        brand.setAttribute("class","brand")
        brand.innerText = element.brand


        let pricediv = document.createElement("div")
        pricediv.setAttribute("class","price")
        pricediv.setAttribute("id","price")

        let price = document.createElement("h3")
        price.innerText = "₹"+element.Price
        
        let mrp = document.createElement("h3")
        mrp.innerText = "₹"+element.mrp
        let discount = document.createElement("h4")
        discount.innerText = `${element.Discount} off`

        let ratdiv = document.createElement("div")
        ratdiv.setAttribute("class","rating")
        let rating = document.createElement("p")
        rating.innerText = element.rating
        let ratimg = document.createElement("img")
        ratimg.setAttribute("src","https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg")


        let primediv = document.createElement("div")
        primediv.setAttribute("class","prime")

        let primeimg = document.createElement("img")
        primeimg.setAttribute("src","https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg")
        let primeinfo = document.createElement("p")
        primeinfo.innerText = `₹${element.Price-150} for Premium Members`

        let btndiv = document.createElement("div")
        btndiv.setAttribute("class","btn")
        btndiv.setAttribute("id","btn")

        btndiv.addEventListener("click",()=>{
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
        })
       


        let cartimg = document.createElement("img")
        cartimg.setAttribute("src","All images/shopingCart.png")
        let text = document.createElement("p")
        text.innerText = "Add To Cart"

        ratdiv.append(rating,ratimg)
        btndiv.append(cartimg,text)
        primediv.append(primeimg,primeinfo)
        descdiv.append(desc)
        pricediv.append(price,mrp,discount)
        infodiv.append(descdiv,brand,pricediv,ratdiv,primediv,btndiv)
        imgdiv.append(image)
        card.append(imgdiv,infodiv)
        displayData.append(card)
        
    });

      // search part
  let formsearch = document.querySelector("form");
  formsearch.addEventListener("submit", (event) => {
    event.preventDefault();
    let search = formsearch.searchBox.value;

    let filtered = newDataArr.filter((ele) => {
      if (
        // ele.name.toUpperCase().includes(search.toUpperCase()) === true ||
        ele.brand.toUpperCase().includes(search.toUpperCase()) === true
      ) {
        return true;
      } else {
        return false;
      }
    });
    appendData(filtered);
  });
    
}



// filtering part ****************************



const appliedFilterObj = {
    // category: null,
    Price: null,
    brand: null,
    ratings: null,
  };
  
  const updateAppliedFilterObj = (key, value) => {
    appliedFilterObj[key] = value;
    console.info("appliedFilterObj >>>> ", appliedFilterObj);
    filterAllDataOnFilterObjChanged();
  };
  
  const filterAllDataOnFilterObjChanged = () => {
    const filteredItems = newDataArr.filter((item) => {
    //   if (
    //     appliedFilterObj.category &&
    //     item.name.toLowerCase() != appliedFilterObj.category.toLowerCase()
    //   )
        // return false;
      if (appliedFilterObj.Price && +item.Price > +appliedFilterObj.Price)
        return false;
      if (appliedFilterObj.Price === "above2000" && +item.Price < 2000)
        return false;
      if (
        appliedFilterObj.brand &&
        item.brand.toLowerCase() != appliedFilterObj.brand.toLowerCase()
      )
        return false;
      if (appliedFilterObj.ratings && item.rating < appliedFilterObj.ratings)
        return false;
  
      return true;
    });
    console.info("filteredItems >>>>>>>>>>>?????? ", filteredItems);
    appendData(filteredItems);
  };
  
  const resetAppliedFilterObj = () => {
    // appliedFilterObj.category = null;
    appliedFilterObj.Price = null;
    appliedFilterObj.brand = null;
    appliedFilterObj.ratings = null;
    appendData(newDataArr);
  };
  
  // filter part
  // filer by category
  let filteredArray = [];
  
  let filterbyCategory = document.querySelector(".filter");
  
  filterbyCategory.addEventListener("change", (event) => {
    event.preventDefault();
    updateAppliedFilterObj("category", event.target.value);
  });
  
  // filter by Price
  let filterbyPrice = document.querySelector(".filterbyprice");
  
  filterbyPrice.addEventListener("change", (event) => {
    updateAppliedFilterObj("Price", event.target.value);
  });
  
  // filter by brand
  let filterbyBrand = document.querySelector(".filterbyBrand");
  
  filterbyBrand.addEventListener("change", (event) => {
    updateAppliedFilterObj("brand", event.target.value);
  });
  
  // filter by rating
  let filterbyRating = document.querySelector(".filterbyRating");
  
  filterbyRating.addEventListener("change", (event) => {
    updateAppliedFilterObj("ratings", event.target.value);
  });
  
  // sorting part
  let sort = document.querySelector(".sort");
  
  sort.addEventListener("change", (event) => {
    let selected = event.target.value;
  
    if (selected === "HTL") {
        // console.log(newDataArr)
      let sortDataHTL = newDataArr.sort((a, b) => b.Price - a.Price);
      appendData(sortDataHTL);
    } else if (selected === "LTH") {
      let sortDataLTH = newDataArr.sort((a, b) => a.Price - b.Price);
      appendData(sortDataLTH);
    } else if (selected === "Rating") {
      let sortDatabyRating = newDataArr.sort((a, b) => b.rating - a.rating);
      appendData(sortDatabyRating);
    }
  });
  


// filtering part end****************************


// goto home page on logo click

let logo = document.getElementById("logoImg")
logo.addEventListener("click",()=>{
  location.href="index.html"
})

// go to cart page ***********************
let cartt=document.getElementById("cart")
cartt.addEventListener("click",()=>{
  location.href="cart.html"
})