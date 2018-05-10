


  $('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

  anime.timeline({loop: false})
  .add({
    targets: '.clasesita',
    translateX: [0,0],
    translateZ: [70,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  });




anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    delay: function(el, i) {
      return 500 + 80 * i;
    }
  });


function loadingBarAnimation() {
   //loadingBar is the #cd-loading-bar element
   //scaleY is the loadingBar actual scale value
   var scaleMax = loadingBar.data('scale'); //this is the scaleY value to cover the entire window height (100% loaded)
   if( scaleY + 1 < scaleMax) {
      newScaleValue = scaleY + 1;
   } 
   // ...
  
   loadingBar.velocity({
      scaleY: newScaleValue
      }, 100, loadingBarAnimation
   );
}

function loadNewContent(newSection) {
   //create a new section element and insert it into the DOM (newSection is the data-menu of the selected navigation item)
   var section = $('<section class="cd-section overflow-hidden '+newSection+'"></section>').appendTo(mainContent);
  
   //load the new content from the proper html file
   section.load(newSection+'.html .cd-section > *', function(event){   
      loadingBar.velocity({
         scaleY: scaleMax //this is the scaleY value to cover the entire window height (100% loaded)
         }, 400, function(){
            //add the .visible class to the new section element -> it will cover the old one
            section.addClass('visible');

            var url = newSection+'.html';

            if(url!=window.location){
               //add the new page to the window.history
               window.history.pushState({path: url},'',url);
            }

            // ...
         }
      );
   });
}

$(document).ready(function(){
    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
});



