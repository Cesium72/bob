let box = document.getElementById("thebox");
let area = document.getElementById("area");
var converse = ["Yes", "No", "Panda", "Good days suck. Who likes having good days? Do you know <i>anyone</i> who likes having good days?", "Yay! It warms my heart to hear that someone is having a bad day! I love them too!", "Did I ****ing ask???",["Yes, everyone","No one does","Why don't you?","I don't know anyone like that! Who the **** likes good days?","Exactly! Then why did you ****ing say you were having a good day?","Mind your own ****ing beeswax!"],[],null];
function input(thing) {
    box.innerHTML += `<br clear="both">
    <div class="item right">
        <div class="msg">
            <p>${converse[thing]}</p>
        </div>
    </div>`;
    box.innerHTML += `<div class="item">
    <div class="icon">
        <i class="fa fa-user"></i>
    </div>
    <div class="msg">
        <p>${converse[thing + 3]}</p>
    </div>
</div>`
converse = converse[thing + 6];
if(converse == null) {
    area.textContent = "Bob got mad and rage-quitted";
}
area.innerHTML = `<div class="typing-area">
    <button onclick="input(0)">${converse[0]}</button>
    <button onclick="input(1)">${converse[1]}</button>
    <button onclick="input(2)">${converse[2]}</button>
</div>`;
}