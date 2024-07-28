window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() { 

    document.addEventListener('mousemove', toolTipMouse, false);

 }


function toolTipMouse(event) {
    var tooltip = document.querySelectorAll('.tooltiptext');
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = event.pageX + 'px';
        tooltip[i].style.top = event.pageY + 'px';
    }
}

