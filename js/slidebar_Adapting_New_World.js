/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundAdaptingToNewWorld.pause(); bgsoundAdaptingToNewWorld.currentTime = 0; 
});

$('.menubtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnAdaptingNewWorld').css('background-position', '0px -90px');
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

$('.homebtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnAdaptingNewWorld').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnAdaptingNewWorld').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnAdaptingNewWorld').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnAdaptingNewWorld').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnAdaptingNewWorld').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnAdaptingNewWorld').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bAdaptingNewWorld').position();
  if (botsposition.left == 1024) {
    $('.bAdaptingNewWorld').css({'opacity':1});
    $('.plAdaptingNewWorld').css({'opacity':1});
    $('.fAdaptingNewWorld').css({'opacity':1});
    $('.bAdaptingNewWorld').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plAdaptingNewWorld').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fAdaptingNewWorld').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bAdaptingNewWorld').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bAdaptingNewWorld').css({'left':'1024px'}); });
    $('.plAdaptingNewWorld').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plAdaptingNewWorld').css({'left':'1024px'}); });
    $('.fAdaptingNewWorld').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fAdaptingNewWorld').css({'left':'1024px'}); });
  }
});

$('.rwAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwAdaptingNewWorld').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsAdaptingNewWorld').css('background-position-y', '-73px');
    }, 300);
});

$('.fwAdaptingNewWorld').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwAdaptingNewWorld').css('background-position-y', '-73px');
    }, 300);
});