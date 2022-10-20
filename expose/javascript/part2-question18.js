function dispTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
let timerId = setInterval(dispTime , 1000);
