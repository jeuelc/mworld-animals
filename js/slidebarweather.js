/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-naturalworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundweather.pause(); bgsoundweather.currentTime = 0; 
});

$('.menubtnweather').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnweather').css('background-position', '0px -90px');
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

$('.homebtnweather').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnweather').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnweather').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnweather').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnweather').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnweather').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnweather').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnweather').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnweather').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnweather').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnweather').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnweather').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bweather').position();
  if (botsposition.left == 1024) {
    $('.bweather').css({'opacity':1});
    $('.plweather').css({'opacity':1});
    $('.fweather').css({'opacity':1});
    $('.bweather').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plweather').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fweather').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bweather').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bweather').css({'left':'1024px'}); });
    $('.plweather').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plweather').css({'left':'1024px'}); });
    $('.fweather').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fweather').css({'left':'1024px'}); });
  }
});

$('.rwweather').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwweather').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsweather').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsweather').css('background-position-y', '-73px');
    }, 300);
});

$('.fwweather').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwweather').css('background-position-y', '-73px');
    }, 300);
});