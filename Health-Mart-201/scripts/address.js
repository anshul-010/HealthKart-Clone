let cart = JSON.parse(localStorage.getItem("cart"))
let addressDetail = JSON.parse(localStorage.getItem('address'));

display(cart);

let saveBtn = document.querySelector('form');
saveBtn.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let area = document.getElementById('area').value;
    let landmark = document.getElementById('landmark').value;
    let pincode = document.getElementById('pincode').value;
    let email = document.getElementById('email').value;
    let addressType = document.getElementById('addressType').value;

    let obj = { name, mobile, area, landmark, pincode, email, addressType };

    localStorage.setItem('address', JSON.stringify(obj))

    window.location.href='payment.html';

})


function display(cart) {



    let totalMrp = 0;
    let totalPrice = 0;
    let totalDisc = 0;

    cart.forEach((ele) => {
        totalMrp += ele.mrp * ele.quantity;
        totalPrice += ele.Price * ele.quantity;
    })
    totalDisc = totalMrp - totalPrice;

    document.getElementById('totalmrp').innerText=totalMrp;
    document.getElementById('totaldiscount').innerText=totalDisc;
    document.getElementById('paytm').innerText=totalPrice;
    document.getElementById('totalitem').innerText=`(${cart.length} items)`;
}
