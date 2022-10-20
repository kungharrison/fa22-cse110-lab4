let d = new Date();
let time = d.toLocaleDateString();
// prints out time every 1 second
var interval = setInterval(function() {
  console.log(time);
}, 1000);
