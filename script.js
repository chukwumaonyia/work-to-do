var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}
// to create the list items
function createlistElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }
     li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);


    dBtn.addEventListener("click", deleteListItem);


    function deleteListItem() {
        li.classList.add("delete");
    }
}  // also for a delete list items


//  this a functon that will add list after click
function addListAfterClick() {
 if (inputLength() >0){
    createlistElement() 
 } 
}

enterButton.addEventListener("click",addListAfterClick);

function addListAfterKeyPress(event){
if (inputLength() > 0 && event.which === 13){
    createlistElement()
}
}
input.addEventListener("keypress",addListAfterKeyPress);