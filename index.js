document.getElementById("in").addEventListener("keyup",(evt) => evt.key == "Enter" ? input(): null)
function input() {
    var content = document.getElementById("in").value;
    document.getElementById("in").value = "";
    // Add Code to deal w/ content later
}