// JavaScript Document
$(function(){
	 $(".mainlevel:has(div)").hover(function(){
	  
	  $(this).addClass("current");
	  $(this).children("div").stop(true,true).slideDown(300)
	  },function(){
		  $(this).removeClass("current");
	  $(this).children("div").stop(true,true).slideUp(1)
	  })
	 
	  
	});

