/* Mapa*/

let lat = 0;

let lng = 0;

let map = L.map('map', {
    zoomControl: false
}).setView([lat, lng], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<span style="font-size: 12px;">&copy; <a href="http://www.openstreetmap.org/copyright" style="font-size: 12px;">OpenStreetMap</a></span>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);

/* Fim Mapa*/

const inputIp = document.querySelector("#ip");

const sumbit = document.querySelector("#submit");

const ipResult = document.querySelector("#ip-result");

const cityResult = document.querySelector("#city-result");

const countryResult = document.querySelector("#country-result");

const codePostResult = document.querySelector("#codepost-result");

const timezoneResult = document.querySelector("#timezone-result");

const ispResult = document.querySelector("#isp-result");

let ipUser = fetch('https://api.ipify.org/').then(
    r => r.text()
    ).then(r => trackIp(r));

sumbit.addEventListener("click", (e)=> {
    e.preventDefault()

    let result = validateIp(inputIp.value);

    if (result === false) {
        returnError()
    }
    else {
        inputIp.classList.remove("error");
        sumbit.classList.remove("error")
        trackIp(inputIp.value)
    }
})


function validateIp(input) {
    let ipString = input.split('.');
    let ip = ipString.map(Number);
    if (ip.length != 4 || ip[0] < 0 || ip[0] > 255 || ip[1] < 0 || ip[1] > 255 || ip[2] < 0 || ip[2] > 255 || ip[3] < 0 || ip[3] > 255) {
        return false
    }
    else {
        return true
    }
}

function returnError() {
    inputIp.classList.add("error");
    sumbit.classList.add("error")
    alert("Enter a valid ip number");
}

async function trackIp (ip) {

    let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_L90EKe07k5QVQUew9btMvFdA8bhMi&ipAddress=${ip}`);
    
    let data = await response.json();

    console.log(data);

    returnLocalForUser(data)

}

function returnLocalForUser(data) {
    ipResult.textContent = `${data.ip}`;
    cityResult.textContent = `${data.location.city}`;
    countryResult.textContent = `${data.location.country}`;
    codePostResult.textContent = `${data.location.postalCode}`;
    timezoneResult.textContent = `${data.location.timezone}`;
    ispResult.textContent = `${data.isp}`;
    lat = data.location.lat;
    lng = data.location.lng;

    newMap(lat, lng)
}

function newMap(lat, lng) {
    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);
}