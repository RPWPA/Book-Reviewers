function login(){    
        if(document.getElementById("loginError")){
            if (window.getComputedStyle((document.getElementById("loginError")),null).getPropertyValue("display") == "none") {
                document.getElementById("loginError").style.display = "block";
            }
        }
}
function closeLogin(){
    if(document.getElementById("loginError")){
        if (window.getComputedStyle((document.getElementById("loginError")),null).getPropertyValue("display") == "block") {
            document.getElementById("loginError").style.display = "none";
        }
    }
}