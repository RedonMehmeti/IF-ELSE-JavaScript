// let hour = new Date ().getHours();
// let greeting;

// if (hour <10){
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;

const time = new Date().getHours();
let greeting;
if (time < 2) {
  greeting = "Good morning";
} else if (time <22) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;


let hour = 13;

if (hour >= 6 && hour < 12)
console.log('Good morning');
else if (hour >= 12 && hour < 18)
console.log('Good afternoon');
else 
console.log('Good evening');