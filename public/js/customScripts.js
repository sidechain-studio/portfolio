// GLOBAL Sidechain CUSTOM SCRIPTS
// Add class to <body> for each page
$( document ).ready(function() {

  var services = document.getElementById("services");
  var journal = document.getElementById("journal");
  var work = document.getElementById("portfolio");
  var project = document.getElementById("project");

  if(services) {
    $('body').addClass('services');
  }
  if(journal) {
    $('body').addClass('journal');
  }
  if(work) {
    $('body').addClass('work');
  }
  if(project) {
    $('body').addClass('project');
  }
});



// Mobile Toggle Button add classes

$( document ).ready(function() {
  var menuBtn = document.getElementById('menuButton');
  var menuBtnL = document.getElementById('landingMobile');

  if ($(window).width() < 768) { 
    if(menuBtnL) {
      menuBtnL.addEventListener('click', function() {
        if ($('#contactForm').hasClass('open')) {
          $('#contactForm').removeClass('open')
        } else {
          $('#coverLayer').toggleClass('open')
          $('#landing-mobile-menu').toggleClass('open');
        }
      });
    }
    if(menuBtn) {
      menuBtn.addEventListener('click', function() {
        if ($('#contactFormSite').hasClass('open')) {
          $('#contactFormSite').removeClass('open')
        } else {
          $('#mobile-menu').toggleClass('open');
          $('#coverLayer').toggleClass('open');
        }
      });
  } else {
      if(menuBtn) {
        menuBtn.addEventListener('click', function() {
          $('#coverLayer').toggleClass('open')
          $('#mobile-menu').toggleClass('open');
        }, false);
      }
    }
  }  
});


// Add Open Class to Home Contact

$( document ).ready(function() {
  var contactBtn = document.getElementById('contactButton');
  var cntactHome = document.getElementById('contactHome');

  if(contactBtn) {
    contactBtn.addEventListener('click', function() {
      $('#coverLayer').addClass('open')
      $('#contactFormSite').toggleClass('open');
    }, false);
  }
  if(cntactHome) {
    cntactHome.addEventListener('click', function() {
      $('#coverLayer').addClass('open')
      $('#contactForm').toggleClass('open');
    }, false);
  }
  /*cntactHome.addEventListener('click', function() {
    $('#contactForm').toggleClass('open');
  }, false);*/
});


// Remove Open Class from Contact #Mobile

$( document ).ready(function() {
  var closeBtn = document.getElementById('closeButton');

  if ($(window).width() >= 768) { 
    closeBtn.addEventListener('click', function() {
      $('#coverLayer').removeClass('open');
      $('#contactFormSite').removeClass('in open');
    }, false);
  } else {
    closeBtn.addEventListener('click', function() {
      $('#contactFormSite').removeClass('in open');
      $('#menuButton').removeClass('hide-element');
    });
  }
});




$( document ).ready(function() {
  var mContact = document.getElementById('cToggle');
  var mContSite = document.getElementById('cToggleM');

  if(mContact) {
    mContact.addEventListener('click', function() {
      console.log("CLICK");
      $('#contactForm').toggleClass('open');
      $('#landingMobile').addClass('hide-element');
    }, false);
  }
  if(mContSite) {
    mContSite.addEventListener('click', function() {
      console.log("CLICK");
      $('#contactFormSite').toggleClass('open');
      $('#menuButton').addClass('hide-element');
    }, false);
  }
});

$( document ).ready(function() {
  var myEl = document.getElementById('closeButtonHome');

  if(myEl) {
    myEl.addEventListener('click', function() {
      $('#contactForm').removeClass('in open');
      $('#landingMobile').removeClass('hide-element');
      // $('#menuButton').removeClass('hide-element');
    });
  }
});

// Close Menu Button 

$( document ).ready(function() {
  var menuBtn = document.getElementById('menuButton');

  menuBtn.addEventListener('click', function() {
    if(menuBtn) {
      if ( $('#coverLayer').hasClass('open') ) {
        $('.outer-container').removeClass('open')
      }
    }
  });
});


// Navbar Scroll 
// Scroll function which adds/removes classes from objects when the user scrolls. 
// Includes the Navbar + Sidebar Socials + Footer + Pagination

$( document ).ready(function() {
  //caches a jQuery object containing the header element
  var header = $(".navbar-default");
  var pageHead = $(".page-nav-cont");
  var sidebar = $(".sidebar-menu");
  var footer = $(".footer");
  var pagination = $(".pagination");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
    if (scroll > 60) {
      pageHead.addClass("scrolled");
      sidebar.addClass("scrolled");
      pagination.addClass("scrolled");
    } else {
      pageHead.removeClass("scrolled");
      sidebar.removeClass("scrolled");
      pagination.removeClass("scrolled");
    }
    if ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 500 ){
      sidebar.removeClass("scrolled");
    }
    if ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 800 ){
      footer.removeClass("invisible");
    } else {
      footer.addClass("invisible");
    }

    // var vid = document.getElementById("myVideo"); 

    // if( $(window).scrollTop() < 500) {
    //   vid.play();
    // }else {
    //   vid.pause();
    // }
  });
});


// Back top top button 
// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("topBtn").style.bottom = "2em";
    } else {
      document.getElementById("topBtn").style.bottom = "-4em";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


window.onresize = function () {
  $('#coverLayer').removeClass('open');
};

///---------////


/* Mobile Nav Animation */

$(document).ready(function(){
  $('#menuButton').click(function(){
    $(this).toggleClass('open');
  });
});

/* Mobile Nav Animation */

$(document).ready(function(){
  $('#landingMobile').click(function(){
    $(this).toggleClass('open');
  });
});

/* Mobile Contact Back Button */

$(document).ready(function(){
  if ($(window).width() < 768) { 
    $('#back-btn-mobile').click(function(){
      $('#contactForm').removeClass('open');
      $('#landingMobile').removeClass('hide-element');
    });
  }
});

$(document).ready(function(){
  if ($(window).width() < 768) { 
    $('#back-btn-mobile-site').click(function(){
      $('#contactFormSite').removeClass('open');
      $('#menuButton').removeClass('hide-element');
    });
  }
});




// ------------------------------ //
// New Page Loader

window.onload = function () {
  var element = document.body;
  element.classList.add("loaded");
  console.log("I am loaded af");
}

$( document ).ready(function() {
  $('.nav-item').click( function() {
    $('body').removeClass("loaded");
    console.log("Noooooooo");
  });
});





        