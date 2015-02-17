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
      content: '<div style="text-align: center; margin-top: 10px;"><iframe src="//www.slideshare.net/slideshow/embed_code/40553904" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>',
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

  $("#workshop-4").click(function() {
    $.fancybox({ 
      content: '<div style="text-align: center; margin-top: 10px;"><iframe src="//www.slideshare.net/slideshow/embed_code/41328630" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>',
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

  // Semester tabs
  console.log(window.location.href);

  function setFooterText(semester) {
    var footerHtml;

    if(semester == '#spring-2015') {
      footerHtml = '<p>The Spring 2015 workshop was supported by a Data-Driven Assignment Grant from the <a href="https://cst.usc.edu/" target="_blank">USC Center for Scholarly Technology</a> in support of the Office of the Provost\’s strategic focus on data literacy and SC CTSI\'s Education (ECDE) and electronic Home (eHome) programs. <a href="http://www.sc-ctsi.org" target="_blank">SC CTSI</a> is part of the Clinical and Translational Science Awards (CTSA) network funded through the National Center for Advancing Translational Sciences (NCATS) at the NIH (Grant Number UL1TR000130).</p>';
    }

    if(semester == '#fall-2014') {
      footerHtml = '<p>The launch of the Digital Scholar Training Initiative was supported by the <a href="https://research.usc.edu/" target="_blank">USC Office of Research</a> and SC CTSI\'s Education (ECDE), Research Development (RD), and electronic Home (eHome) programs. <a href="http://www.sc-ctsi.org" target="_blank">SC CTSI</a> is part of the Clinical and Translational Science Awards (CTSA) network funded through the National Center for Advancing Translational Sciences (NCATS) at the NIH (Grant Number UL1TR000130).</p>';
    }

    $('footer').html(footerHtml);
  }

  if (window.location.href.indexOf('spring-2015') > -1) {
    setFooterText('#spring-2015');
  }

  if (window.location.href.indexOf('fall-2014') > -1) {
    setFooterText('#fall-2014');
  }

  $('#tabs').bind('easytabs:after', function(evt, tab, panel, data) {
    setFooterText(tab.context.hash);
  });

  $('#tabs').easytabs( );
});
