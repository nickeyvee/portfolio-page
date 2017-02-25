$(document).ready( () => {

    $(".user-info").keyup( (event) => { 
        if (event.keyCode === 13) {
             console.log("pressed enter!")
        }
    })
});