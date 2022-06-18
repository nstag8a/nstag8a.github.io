// creating a variable for card expiry date
//Doesn't work on bootstrap,

// var mmyy = new Date();
//     mmyy.setDate(mmyy.getDate());
//     var month2 = ("0" + (mmyy.getMonth() + 2))
//     var year2 = mmyy.getFullYear();
//     var fullDate2 = year2 + '-' + month2;
//     var monthyear = document.getElementById('monthyear');
//     monthyear.setAttribute('max', fullDate2);


// var datePicker = document.getElementById("checkin");
// var datePicker1 = document.getElementById("checkout");

// datePicker.min = getDate();
// datePicker1.min = getDate();
// function getDate(days) {
//     var date;
//     if (days !== undefined) {
//         date.setDate(date.getDate());
//     } else {
//         date = new Date();
//     }
//     var offset = date.getTimezoneOffset();
//     date = new Date();
 
//     // Borrowed from https://stackoverflow.com/a/29774197/7290573
//     // .toISOString().split("T")[0];
//     return date.toISOString().split("T")[0];

// }



// validation check for users when submit
function submitValidate(){
     if(checkin.value>checkout.value){
     alert("Check in date is greater than check out date. Please select correct date.");		
     return false;}
     

 //email validation check
    var email =document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat))
    {
        alert("You have entered an invalid email address!");
        return false;
    }
//cvv validation check
    var d = new Date();
    var month1 = d.getMonth();
    var tmonth = monthyear.value;

    if(!tmonth==!month1 && !tmonth<month1){
    alert("Card expiration date has to be at least after a month")
    return false;
    }
}




function getPrice(type) {
    //returns the specific value 
    var obj = document.getElementById(type);
    //returns the value from the dropdown box 
    var price = obj.options[obj.selectedIndex].getAttribute("datprice");
    //if price is null, price = 0 if not return value
    if (price == null)
        price = 0;
    return parseInt(price);
    }

//calculates the price and display total price
function priceupdate() {
    document.getElementById("price").innerHTML = "Total: $" +
        (getPrice("rooms") * getPrice("guests"));
    }