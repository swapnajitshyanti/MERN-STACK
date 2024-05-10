var signupBtn = document.getElementById("signupBtn");

var popupContainer = document.getElementById("popupContainer");

signupBtn.onclick = function() {
    popupContainer.style.display = "flex"; 
}


function closePopup() {
    popupContainer.style.display = "none";
}
function openNewTab(){
  window.open('newtab.html');
}