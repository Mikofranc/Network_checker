var phoneNumber = document.getElementById("phoneNumber");
let airtel = document.createElement("img");
let photos = document.getElementById("photos");
photos.appendChild(airtel);

let mtn = document.createElement("img");;
photos.appendChild(mtn);

let glo = document.createElement("img");;
photos.appendChild(glo);

let etisalat = document.createElement("img");;
photos.appendChild(etisalat);



function checkNetwork() {
    event.preventDefault();
    if (phoneNumber.value.startsWith("0802") || phoneNumber.value.startsWith("0901") ||
        phoneNumber.value.startsWith("0808") || phoneNumber.value.startsWith("0901") ||
        phoneNumber.value.startsWith("0708") || phoneNumber.value.startsWith("0708") ||
        phoneNumber.value.startsWith("0902") || phoneNumber.value.startsWith("0901") ||
        phoneNumber.value.startsWith("0907") || phoneNumber.value.startsWith("0907")) {
        airtel.src = "./image/airtel.png";
        airtel.style.height = "30px";
    } else if (
        phoneNumber.value.startsWith("0806") ||
        phoneNumber.value.startsWith("0803") || phoneNumber.value.startsWith("0810")
        ||phoneNumber.value.startsWith("0813") || phoneNumber.value.startsWith("0814")
        || phoneNumber.value.startsWith("0816") || phoneNumber.value.startsWith("0903")
        || phoneNumber.value.startsWith("0906") || phoneNumber.value.startsWith("0703")
        || phoneNumber.value.startsWith("0913")) {
       mtn.src = "./image/MTN_Logo.svg.png";
       mtn.style.height ="30px";

    } else if (phoneNumber.value.startsWith("0805") || phoneNumber.value.startsWith("0807") ||
        phoneNumber.value.startsWith("0811") || phoneNumber.value.startsWith("0815") ||
        phoneNumber.value.startsWith("0905") || phoneNumber.value.startsWith("0705") ||
        phoneNumber.value.startsWith("0915")) {
        glo.src = "./image/glo.jpeg";
        glo.style.height = "30px";

    } else if (phoneNumber.value.startsWith("0809") || phoneNumber.value.startsWith("0817")
        || phoneNumber.value.startsWith("0818") || phoneNumber.value.startsWith("0909")
        || phoneNumber.value.startsWith("0908") || phoneNumber.value.startsWith("0809")) {
        etisalat.src = "./image/9mobile.jpeg";
        etisalat.style.height = "30px";
        
    } else {
        photos.style.color ="red"
        photos.innerHTML = "Network not recognized";
    }
}