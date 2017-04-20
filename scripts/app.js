$(document).ready( () => {
    // immediate state on page load.   
    $('.fa-bars').removeClass('active');
    $('#char-counter').hide();
    $('#menu').addClass('hidden');

const request = $.ajax({
    url: "server.js",
    dataType: 'jsonp',
    type: 'POST',
    data:{ message : $("#textarea").value },
    dataType: 'html'
});

$("#submit").click( () => { 
    console.log( typeof request );
    request();
    request.done( ()=> {
        console.log( 'Request sent!')
    })
    // where webform data will be packaged and sent to the server.
});


    $('.fa-bars').click( () => {
        $('.fa-bars').toggleClass('active');
        $('#menu').toggleClass('hidden');
    }) 
});