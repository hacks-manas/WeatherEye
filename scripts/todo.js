/** 
 * Create a list and identify list items from To-Do 
 * For each new item added append X sign   
 * Assign the X a span class for onclick removal event
**/
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(txt);
    list[i].appendChild(span);
}

/** 
 * Removal function for X - close button 
**/
var close = document.getElementsByClassName("Close");
var j;
for (j = 0; j < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/**
 * For valid entries in to-do
 * Add a checked symbol when clicking on the list item 
**/
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
