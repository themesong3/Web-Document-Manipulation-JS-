couner = 0
var btn = document.getElementById("button")
btn.onclick = function ()
{
    couner ++
    console.log("You clicked the button " + couner + " time(s).")
}