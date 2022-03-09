function print(a){
    var b;
    b=console.log(a);
    return b;
}
var audio=new Audio("media/bfh.ogg");
"use strict";
var a=0;
function count(){
    audio.play();
    a++;
    document.getElementById("clicks").innerHTML=a;
    var lol=document.getElementById("myo")
    let iterationCount = 0;
    lol.style.display="block";
    lol.onanimationiteration = function() {
        iterationCount++;
        if (iterationCount === 1) {
            lol.style.display="none";
        }
    }
}
