var intId;
window.onload = load
function load(){
    intId = setInterval(loading,500);
}
function loading(){
    if(document.getElementById("allPosts3Holder") !== null){
        if (window.getComputedStyle((document.getElementById("allPosts3Holder")),null).getPropertyValue("display") == "none") {
            document.getElementById("allPosts3Holder").style.display = "block";
            document.getElementById("loadingSpinner").style.display = "none";
            clearInterval(intId);
        }
    }
    else{
        if (window.getComputedStyle((document.getElementById("allPosts2Holder")),null).getPropertyValue("display") == "none") {
            document.getElementById("allPosts2Holder").style.display = "block";
            document.getElementById("loadingSpinner").style.display = "none";
            clearInterval(intId);
        }
    }
}