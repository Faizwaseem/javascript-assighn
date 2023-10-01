const Bulb = document.querySelector("#bulb");
const Switch = document.querySelector("#switch");

Switch.addEventListener("click", function () {
  if (Bulb.src.match("on")) {
    Bulb.src = "./pics/bulbof.png";
    Switch.innerHTML = "Turn On";
  } 
  else {
    Bulb.src = "./pics/bulbon.png";
    Switch.innerHTML = "turnof";
    Bulb.src = "./pics/bulbon.png";
  

}
});
