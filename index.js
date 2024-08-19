function check(){
    alert("js connected")
}
var ul=document.getElementById("ulist")
var input=document.getElementById("input")

function makeNote(){
    var item=document.createElement("li")
    item.innerHTML="<input name='str' type='checkbox' class='strikeit'><label for='str'>"+input.value+"</label>"+"<button onclick='removeelt(event)' style='font-size:12px' class='removebutton'>.</button>"+"<hr>"
    ul.append(item)
    overlay.style.display="none";
    popup.style.display="none";   
}

function removeelt(){
      event.target.parentElement.remove()

}

var overlay=document.getElementById("overlay")
var popup=document.getElementById("popup")
function showpopup(){
    overlay.style.display="block";
    popup.style.display="block";    

}