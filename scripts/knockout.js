const maxlength = 140;
const element = function(id) {
	return document.getElementById(id);
};

const countLength = () => {
    let msgLength = element("textarea").value.length;
    let charCounter = element( "char-counter");
    let crrLength = parseInt( maxlength - msgLength );

    $(charCounter).keyup( (e) => { 
        console.log( e.keyup );
    });
    //console.log( crrLength, e.keypress );

    // displays char limit after each keypress.
    $(charCounter).html( maxlength - msgLength );
};
