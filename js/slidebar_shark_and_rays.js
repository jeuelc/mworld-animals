/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundSharkAndRays.pause(); bgsoundSharkAndRays.currentTime = 0; 
});

$('.menubtnSharkAndRays').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnSharkAndRays').css('background-position', '0px -90px');
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

$('.homebtnSharkAndRays').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnSharkAndRays').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnSharkAndRays').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnSharkAndRays').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnSharkAndRays').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnSharkAndRays').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnSharkAndRays').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnSharkAndRays').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnSharkAndRays').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnSharkAndRays').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnSharkAndRays').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnSharkAndRays').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bSharkAndRays').position();
  if (botsposition.left == 1024) {
    $('.bSharkAndRays').css({'opacity':1});
    $('.plSharkAndRays').css({'opacity':1});
    $('.fSharkAndRays').css({'opacity':1});
    $('.bSharkAndRays').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plSharkAndRays').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fSharkAndRays').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bSharkAndRays').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bSharkAndRays').css({'left':'1024px'}); });
    $('.plSharkAndRays').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plSharkAndRays').css({'left':'1024px'}); });
    $('.fSharkAndRays').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fSharkAndRays').css({'left':'1024px'}); });
  }
});

$('.rwSharkAndRays').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwSharkAndRays').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsSharkAndRays').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsSharkAndRays').css('background-position-y', '-73px');
    }, 300);
});

$('.fwSharkAndRays').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwSharkAndRays').css('background-position-y', '-73px');
    }, 300);
});