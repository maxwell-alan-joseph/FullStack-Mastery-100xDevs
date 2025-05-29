/*create a clock that shows you the current time machine
it should update every second and shows time in following formats.
- HH:MM::SS (Eg. 13:45:23)
- HH:MM::SS AM/PM (Eg 01:45:23 PM) */ 


function showTime() {
    const now = new Date ();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    let hours12 = hours  % 12;
    hours12 = hours12 === 0 ? 12 : hours12;

    hh = hours < 10 ? '0' + hours : hours;
    hh12 = hours12 < 10 ? '0' + hours12 : hours12;
    mm = minutes < 10 ? '0' + minutes : minutes;
    ss = seconds < 10 ? '0' + seconds : seconds;

    console.log("24 hour format: ", `${hh}:${mm}:${ss}`);
    console.log("12 hour format: ", `${hh12}:${mm}:${ss} ${ampm}`);
}

setInterval(showTime, 1000);