$(document).ready(function() {
  $('.expandable-list h3').click(function() {
    $(this).next('.answer').slideToggle(250);
	  $(this).toggleClass('open');
	});

	$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});

	$("#workshop-1").click(function() {
	  $.fancybox({ 
      content: '<div style="text-align: center; margin-top: 10px;"><iframe src="//www.slideshare.net/slideshow/embed_code/39685699" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>',
      maxWidth  : 825,
      maxHeight : 675,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
	});

  $("#workshop-2").click(function() {
    $.fancybox({ 
      content: '<div style="text-align: center; margin-top: 10px;"><iframe src="//www.slideshare.net/slideshow/embed_code/40128646" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>',
      maxWidth  : 825,
      maxHeight : 675,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  });

  $("#workshop-3").click(function() {
    $.fancybox({ 
      content: '<div style="text-align: center; margin-top: 10px;"><iframe src="//www.slideshare.net/slideshow/embed_code/40128646" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>',
      maxWidth  : 825,
      maxHeight : 675,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  }); 

  // Video grid hover effects
  $(".trainee-voices figure").mouseenter(function() {
    $(this).addClass("hover");
  })
  .mouseleave(function() {
    $(this).removeClass("hover");
  });
});
