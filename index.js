$(document).ready(function(){ 
    window.alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t Site Under Construction! \t\t\t\t\t\t\t\t\t\t\t\t\t\t\n Stay tuned for updates. Redirecting to LinkedIn profile...");
    window.location.replace("https://www.linkedin.com/in/pavan-kulkarni-a9b433201/");
    bttButton = document.querySelector('#back-to-top');
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            bttButton.style.visibility = 'visible';
        } else { 
            bttButton.style.visibility = 'hidden';
        } 
    }); 
});

/*
function disableScrolling() {
    setTimeout(function() {
        document.body.style.overflow = 'hidden';
    }, 5000);
}
  
function enableScrolling() {
    document.body.style.overflow = '';
}
*/

document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  });