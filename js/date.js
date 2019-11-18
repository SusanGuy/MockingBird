let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
let minutes = today.getMinutes();

if (minutes < 10) {
    minutes = "0" + minutes;
}

if (hour < 12) {
    minutes = minutes + " AM";
}

if (hour >= 12) {
    hour -= hour !== 12 ? 12 : 0;
    minutes += " PM";
}

if (hour < 10) {
    hour = "0" + hour;
}

if (dd < 10) {
    dd = "0" + dd;
}

if (mm < 10) {
    mm = "0" + mm;
}
const hero = mm + "/" + dd + "/" + year + " " + hour + ":" + minutes;

document.querySelector("#date").textContent = hero;