$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#back-to-top').fadeIn(); 
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    }); 
});

function disableScrolling() {
    setTimeout(function() {
        document.body.style.overflow = 'hidden';
    }, 3000);
}
  
function enableScrolling() {
    document.body.style.overflow = '';
}