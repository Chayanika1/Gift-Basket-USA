var height = $('.index-heading').height();
$(window).scroll(function(){
	if($(this).scrollTop() > height){
		$('.categories').addClass('fixed');
	}
	else{
		$('.categories').removeClass('fixed');
	}
});

$(".view-cat").click(function(){
	$(".PC-menu").toggleClass("show-PC");	
	$(".fa-bars").toggle();	
	$(".fa-xmark").toggle();	
});

$(".cat-menu").click(function(){
	$("#cat-mega-menu").toggle();	
	$(".cat-menu").toggleClass("cat-mrgn");	
});
$(".oc-menu").click(function(){
	$("#oc-mega-menu").toggle();	
	$(".oc-menu").toggleClass("oc-mrgn");	
});

$(".click-search").click(function(event){
    $("#search-bar_ID").show();
});
$(".search-close").click(function(event){
    $("#search-bar_ID").hide();
    document.getElementById('searchKey').value = "";
});

$(".banner-slider-txt").owlCarousel({items: 1,loop: true,dots: true,autoplay: true,autoplaySpeed: 800,});
$(".t-body").owlCarousel({
    //items: 3,
    loop: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 800,
	responsive:{
         0:{
            items: 1
         },
		 696:{
			items: 3	
       	 }
    }
});