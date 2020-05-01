var intId;
window.onload = progLoad
function progLoad(){
    intId = setInterval(checkValue,1000);
}
function checkValue(){
    if (window.getComputedStyle((document.getElementById("progBar0")),null).getPropertyValue("display") == "block") {
        document.getElementById("progBar25").style.display = "block";
        document.getElementById("progBar0").style.display = "none";
    }
    else if (window.getComputedStyle((document.getElementById("progBar25")),null).getPropertyValue("display") == "block") {
        document.getElementById("progBar50").style.display = "block";
        document.getElementById("progBar25").style.display = "none";
    }
    else if (window.getComputedStyle((document.getElementById("progBar50")),null).getPropertyValue("display") == "block") {
        document.getElementById("progBar75").style.display = "block";
        document.getElementById("progBar50").style.display = "none";
    }
    else if (window.getComputedStyle((document.getElementById("progBar75")),null).getPropertyValue("display") == "block") {
        document.getElementById("progBar100").style.display = "block";
        document.getElementById("progBar75").style.display = "none";
    }
    else if (window.getComputedStyle((document.getElementById("progBar100")),null).getPropertyValue("display") == "block") {
        document.getElementById("allPostsP1").style.display = "block";
        document.getElementById("progBar100").style.display = "none";
        document.getElementById("progressBarHolder").style.display = "none";
        clearInterval(intId);
    }
}