/*
$(document).ready( () => {

    $("#textarea").click( () => {
        console.log( 'clicked ! ! !')
        $("#char-counter").show();
    })
});
*/

const maxlength = 140;
const element = (id) => { return document.getElementById(id) };

const countLength = () => {
    let msgLength = element("textarea").value.length;
    let charCounter = element( "char-counter");
    let crrLength = parseInt( maxlength - msgLength );

    //console.log( msgLength );

    // show char-counter after input.
    msgLength >= 0 ? $(charCounter).show() : $(charCounter).hide();
    
    $(element("textarea")).keyup( (event) => { 
        console.log( event.keycode );
    });
    //console.log( crrLength, e.keypress );

    // displays char limit after each keypress.
    $(charCounter).html( maxlength - msgLength );
};
