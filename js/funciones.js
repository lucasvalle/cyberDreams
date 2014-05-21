(function($){
			// var alto=$(window).height()
			// $("header").css("height",alto +"px")

			// 	$(window).resize(function(){
			// 			var alto=$(window).height()
			// 			$("header").css("height",alto +"px")
			// 	})

 $(window).on("scroll",function(){
if(scrollY = $(window).scrollTop()>=45){
	$(".navbar").addClass("navbar-fixed-top");
	$(".navbar").css({
		"padding-right":"15px",
		"margin-top":"0px"
	})	
}else{
	$(".navbar").removeClass("navbar-fixed-top");
	$(".navbar").css({
		"padding-right":"5px",
		"margin-top":"15px"
	})	


}

 })
}(jQuery))