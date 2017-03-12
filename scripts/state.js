const maxlength = 140;
const element = (id) => { return document.getElementById(id) };

const changeState = () => {
    let msgLength = element("textarea").value.length;
    let charCounter = element("char-counter");

    msgLength > 130 ? $(charCounter).addClass("red") : $(charCounter).removeClass("red");

    // freeze submit button.
    msgLength > 140 ? $("#submit").addClass("avoid-clicks").removeClass("enabled") : $("#submit").removeClass("avoid-clicks").addClass("enabled");

    msgLength > 0 ? $(charCounter).show() : $(charCounter).hide();
    $(charCounter).html( maxlength - msgLength );
};

$(document).ready( () => {
    $("#textarea").keyup( (event) => {
        changeState();
    })
});
