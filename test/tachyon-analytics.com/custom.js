$( () => {
    $("form").submit(()=>{
        const unixTime = Math.floor(Date.now() / 1000);
        $("form").append('<input type="hidden" name="tick" value="'+unixTime+'" />');
    })

	//testimonials

	jQuery('.bxslider').bxSlider({
		auto:true,
		maxSlides: 1,
		minSlides: 1,
		pager: true,
		controls: false,
		moveSlides: 1
  });	

  //banner

	jQuery('.bxslider2').bxSlider({
		auto:true,
		maxSlides: 1,
		minSlides: 1,
		pager: false,
		controls: false,
		moveSlides: 1
  });
	
    $('.counters .block h5 span').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counters .block h5 span').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');

});