window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'Are you sure you want to close this tab?'
       + 'If you were still running tasks in here then they will close!';
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});