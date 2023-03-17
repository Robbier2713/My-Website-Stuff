// smooth scroll to section
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash - 500;
            });
        } 
    });
});

// user reviews carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})

/*CHANGES NAV BAR FROM A STICKY TO  STATIONARY & VISE VERSA*/

$(window).scroll(function() {
	if($(this).scrollTop()>50){
		/*WHEN SCROLLED DOWN*/
		$(".cn-stick-nav").removeClass("affix-top");

	}
	
	/*WHEN SCROLLED UP*/
	
	else{
		$(".cn-stick-nav").addClass("affix-top navbar-light bg-light");
	}
	
})


$(window).scroll(function() {
	if($(this).scrollTop()>50){
		$(".navbar .navbar-brand img").attr("src","assets/imgs/brand_trans.png");
		
	}
	
		else{
		$(".navbar .navbar-brand img").attr("src","assets/imgs/brand.png");
	}

})