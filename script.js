// Select all food rows
const foodRows = document.querySelectorAll(".food-row");

// Loop through each row
foodRows.forEach(row => {

    const minusBtn = row.querySelector(".qty button:first-child");
    const plusBtn = row.querySelector(".qty button:last-child");
    const qtyText = row.querySelector(".qty span");

    let qty = 0;

    // PLUS BUTTON
    plusBtn.addEventListener("click", () => {
        qty++;
        qtyText.innerText = qty;
    });

    // MINUS BUTTON
    minusBtn.addEventListener("click", () => {
        if(qty > 0){
            qty--;
            qtyText.innerText = qty;
        }
    });

});


// ORDER BUTTON
document.querySelector(".order-btn").addEventListener("click", function(){

let message = "Order from Ksheera Sagar:%0A%0A";

const rows = document.querySelectorAll(".food-row");

rows.forEach(row => {

let food = row.querySelector(".food-name").innerText;
let price = row.querySelector(".food-price").innerText;
let qty = row.querySelector(".qty span").innerText;

if(qty > 0){
message += food + " x " + qty + " - " + price + "%0A";
}

});

let phone = "917619573443";  // replace with hotel owner's number

let whatsappURL = "https://wa.me/" + phone + "?text=" + message;

window.open(whatsappURL);


});
function sendReservation(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

let message = "Hall Reservation Request\n\n";
message += "Name: " + name + "\n";
message += "Email: " + email + "\n";
message += "Phone: " + phone + "\n";
message += "Date: " + date + "\n";
message += "Time: " + time;

let owner = "917619573443";

let url = "https://wa.me/" + owner + "?text=" + encodeURIComponent(message);

// 🔥 use this (more reliable)
window.location.href = url;

}