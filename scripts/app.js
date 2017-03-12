$(document).ready( () => {
    // immediate state on page load.   
    $('.fa-bars').removeClass('active');
    $('#char-counter').hide();
    $('#menu').addClass('hidden');

    $('.user-info').keyup( (event) => { 
        if (event.keyCode === 13) {
             console.log('pressed enter!')
        }
    })

    $('.fa-bars').click( ()=> {
        $('.fa-bars').toggleClass('active');
        $('#menu').toggleClass('hidden');
    })
});