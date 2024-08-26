function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric"});
    const currentTimeClock = now.toLocaleString("en-Us", {hour: "numeric", minute: "numeric", second: "numeric", hour12: false});
    document.querySelector('#left').textContent = "THE DATE IS " + currentDateTime.toLocaleUpperCase() + ". THE TIME IS " + currentTimeClock.toLocaleUpperCase() + ".";
}

setInterval(updateDateTime, 1000);