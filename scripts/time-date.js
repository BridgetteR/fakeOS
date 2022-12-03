const currentTime = () => {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = hh < 10 ? hh : hh;
    mm = mm < 10 ? "0" + mm : mm;

    let time = `${hh}:${mm} ${session}`;

    document.getElementById("currentTime").innerText = time;
    setTimeout(() => {
        currentTime();
    }, 1000);
};

const currentDate = () => {
    const date = new Date();
    let dd = date.getDay();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();

    let cDate = `${dd}/${mm}/${yyyy}`;

    document.getElementById("currentDate").innerText = cDate;
};

currentTime();
currentDate();
