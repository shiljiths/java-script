const prompt = require("prompt-sync")();

// let day ="monday";
let day = prompt("enter the day : ")

switch (day) {
    case "monday":
        console.log("start of work week");
        break;
    case "friday":
        console.log("end of the week");
        break;
    case "sunday":
        console.log("weekend");
        break
    default:
        console.log("regular day");
        break;
}