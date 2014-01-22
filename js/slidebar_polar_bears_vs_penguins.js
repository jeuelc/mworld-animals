/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundPolarBears.pause(); bgsoundPolarBears.currentTime = 0; 
});

$('.menubtnPolarBears').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnPolarBears').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtnPolarBears').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnPolarBears').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnPolarBears').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnPolarBears').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnPolarBears').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnPolarBears').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnPolarBears').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnPolarBears').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnPolarBears').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnPolarBears').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnPolarBears').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnPolarBears').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bPolarBears').position();
  if (botsposition.left == 1024) {
    $('.bPolarBears').css({'opacity':1});
    $('.plPolarBears').css({'opacity':1});
    $('.fPolarBears').css({'opacity':1});
    $('.bPolarBears').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plPolarBears').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fPolarBears').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bPolarBears').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bPolarBears').css({'left':'1024px'}); });
    $('.plPolarBears').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plPolarBears').css({'left':'1024px'}); });
    $('.fPolarBears').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fPolarBears').css({'left':'1024px'}); });
  }
});

$('.rwPolarBears').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwPolarBears').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsPolarBears').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsPolarBears').css('background-position-y', '-73px');
    }, 300);
});

$('.fwPolarBears').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwPolarBears').css('background-position-y', '-73px');
    }, 300);
});