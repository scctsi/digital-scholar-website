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

	// Video grid hover effects
    $(".preview-image").mouseenter(function() {
        $(this).addClass("hover");
    })
    .mouseleave(function() {
        $(this).removeClass("hover");
    });
});