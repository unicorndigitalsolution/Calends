// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
// var navbar = document.getElementById("sticky-header");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }




// FORM VALIDATIONS 

var signupbox1 = document.getElementById('signup-box');
var signupgoogle = document.getElementById('signup-google');
var signupoutlook = document.getElementById('signup-outlook');
var signupclassic = document.getElementById('signup-classic');
var signupicloud = document.getElementById('signup-icloud');
var loginemailbox = document.getElementById('login-emailbox');
var loginpassbox = document.getElementById('login-passbox');
var rpassbox = document.getElementById('reset-pass');
var rpassmail = document.getElementById('r-pass-mail');
var pemail = document.getElementById('p-email');
const n = 9;
const i = 10;
const v = 11;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function verifymail() {
  var mail = document.getElementById('email').value;
  if (mail.match(mailformat)) {
    if (mail.substring(mail.length - n) === "gmail.com") {
      signupbox1.style.display = "none";
      signupgoogle.style.display = "block";
      document.getElementById('cemail').value = mail;
    }
    else if (mail.substring(mail.length - v) === "outlook.com") {
      signupbox1.style.display = "none";
      signupoutlook.style.display = "block";
      document.getElementById('cemail').value = mail;
    }
    else if (mail.substring(mail.length - i) === "icloud.com") {
      signupbox1.style.display = "none";
      signupicloud.style.display = "block";
      document.getElementById('cemail').value = mail;
    }
    else {
      document.getElementById('cemail').value = mail;
      classicsignup(mail);
    }
  }
  else {
    document.getElementById('email').classList.add('alert-validate');
  }


}

function classicsignup(mail) {
  signupbox1.style.display = "none";
  signupgoogle.style.display = "none";
  signupoutlook.style.display = "none";
  signupicloud.style.display = "none";
  signupclassic.style.display = "block";

}

function passpage() {
  var mail = document.getElementById('email').value;
  if (mail.match(mailformat)) {
    loginemailbox.style.display = "none";
    loginpassbox.style.display = "block";
    pemail.innerHTML = document.getElementById('email').value;
  }
  else {
    document.getElementById('email').classList.add('alert-validate');
  }
}

function fpass() {
  loginpassbox.style.display = "none";
  rpassbox.style.display = "block";
  rpassmail.innerHTML = document.getElementById('email').value;
}

(function ($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });


  $('.validate-form .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    }
    else {
      if ($(input).val().trim() == '') {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }




})(jQuery);





// FORM VALIDATIONS 

// BILLING PAGE POPUP 

// Inline popups
$('#inline-popups').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

// BILLING PAGE POPUP 


// PRICING PAGE SWITCH 

function toggleCheck() {
  if(document.getElementById("myCheckbox").checked === true){
    document.getElementById("year-rate").style.display = "block";
    document.getElementById("month-rate").style.display = "none";
  } else {
    document.getElementById("year-rate").style.display = "none";
    document.getElementById("month-rate").style.display = "block";

  }
}

function toggleCheck1() {
  if(document.getElementById("myCheckbox1").checked === true){
    document.getElementById("year-rate1").style.display = "block";
    document.getElementById("month-rate1").style.display = "none";
  } else {
    document.getElementById("year-rate1").style.display = "none";
    document.getElementById("month-rate1").style.display = "block";

  }
}

function toggleCheck2() {
  if(document.getElementById("myCheckbox2").checked === true){
    document.getElementById("year-rate2").style.display = "block";
    document.getElementById("month-rate2").style.display = "none";
  } else {
    document.getElementById("year-rate2").style.display = "none";
    document.getElementById("month-rate2").style.display = "block";

  }
}

// PRICING PAGE SWITCH 


// NAVBAR 

$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

});

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $('#sticky-header').addClass('nav-shadow');
  } else {
    $('#sticky-header').removeClass('nav-shadow');
  }
});

// NAVBAR 





