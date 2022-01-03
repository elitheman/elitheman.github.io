let firstImage = document.getElementById("firstImage");
window.addEventListener("scroll", function() {
    var value = window.scrollY;
    console.log(value);
    if(-value*0.5 > -30){
    firstImage.style.left = -value  * 0.5 + "%";
    firstImage.style.width = scrollY + "%";}
    if(value*0.5 < 150){
    firstImage.style.top = value * 0.5 + "%";}
})

