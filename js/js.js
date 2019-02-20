$(document).ready(function(){
	//открытие и закрыытие моб меню
	$(".nav__humburger").on("click", function(evt) {
		evt.preventDefault();
		if($(".nav__humburger").hasClass('x')){
			$(".nav__humburger").removeClass('x');
			$(".navigation__list").removeAttr('style');
		}else{
			$(this).addClass("x");
			$(".navigation__list").css({"display":"flex"});
		}
	});
	var mobyMenuOff = function() {
		$(".navigation__list").removeAttr('style');
		$(".nav__humburger").removeClass('x');
	}
	// фйия открытия оерлей
	var overlayOn = function(evt){
		evt.preventDefault();
		$("body").css({"overflow":"hidden"});
		$(".body-wrapper").addClass('overlay');
		$(".overlay__form").css({"display":"block"});
	};
	var overlayOff = function(){
		$("body").removeAttr('style');
		$(".body-wrapper").removeClass('overlay');
		$(".overlay__form").removeAttr('style');
	};
	$(".header__btn").on("click",function(evt) {
		overlayOn(evt);
	});
	$(".offer__btn").on("click",function(evt){
		overlayOn(evt);
	});
	$(".popup-close").on("click",function(evt) {
		overlayOff();
	});
	$(".body-wrapper").on("click",function(){
		overlayOff();
	});
	$(".radio-1").on("click",function(evt) {
		$(".inner").text("290");
	});
	$(".radio-2").on("click",function(evt) {
		$(".inner").text("370");
	});
	$(".radio-3").on("click",function(evt) {
		$(".inner").text("790");
	});
	//скрол страници
	var header =  $(".navigation");
	var headHeight = header.height();
	$(window).on("scroll", function(){
		var scroll =  $(window).scrollTop();
	   if(scroll > headHeight){
	      header.addClass("fix");
	      $("body").css("paddingTop", headHeight);
	    }else if(scroll < 1){
	      header.removeClass("fix");
	      $("body").removeAttr('style');
	    }
	});
	$("#green-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#green").offset().top;
	  	if($("body").attr("style")){
	  		$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	  		console.log(1)
	  	}
	  	else{
	  		$("html, body").animate({scrollTop:plansOffset + headHeight},300);
	  		console.log(2);
	  	}
	});
	$("#works-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#works").offset().top;
	  	$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	});
	$("#process-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#process").offset().top;
	  	$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	});
	$("#about-us").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#map").offset().top;
	  	$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	});
	// слайдер*/
	var count = 0;
	$(".next").on("click",function(){
		$(".live-foto").removeClass('active--img');
		count++;
		if(count >= $(".live-foto").length){
			count = 0;
		}
		$(".live-foto").eq(count).addClass('active--img');
	});
	$(".prev").on("click",function(){
		$(".live-foto").removeClass('active--img');
		count--;
		if(count == 0){
			count = $(".live-foto").length-1;
		}
		$(".live-foto").eq(count).addClass('active--img');
	});
});