function register(){
    if(document.getElementById("registerError")){
        if (window.getComputedStyle((document.getElementById("registerError")),null).getPropertyValue("display") == "none") {
            document.getElementById("registerError").style.display = "block";
        }
    }
}
function closeRegister(){
    if(document.getElementById("registerError")){
        if (window.getComputedStyle((document.getElementById("registerError")),null).getPropertyValue("display") == "block") {
            document.getElementById("registerError").style.display = "none";
        }
    }
}