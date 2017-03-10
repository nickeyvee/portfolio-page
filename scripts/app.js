$(document).ready( () => {
    // immediate state on page load.   
    $('.fa-bars').removeClass('active');
    $('#menu').addClass('hidden');

    $('.user-info').keyup( (event) => { 
        if (event.keyCode === 13) {
             console.log('pressed enter!')
        }
    })

    // display max character limit
    $( ).on( 'keypress', ()=> {
        
    })

    $('.fa-bars').click( ()=> {
        $('.fa-bars').toggleClass('active');
        $('#menu').toggleClass('hidden');
    })
});