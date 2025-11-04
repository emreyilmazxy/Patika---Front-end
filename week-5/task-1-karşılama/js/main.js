let isim = prompt("İsminizi giriniz:");
document.querySelector(".greeting").innerText = isim;

function updateClock() {
    const time = new Date().toTimeString().slice(0, 8);
    document.querySelector(".current-time").innerText = time;
}

setInterval(updateClock, 1000);

updateClock();
