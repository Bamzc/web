$(function(){
	var thispos=$(".position").text()+"";
	if(thispos.indexOf("金融所")>=1){setcur(1)}
	if(thispos.indexOf("新闻动态")>=1){setcur(2)}
	if(thispos.indexOf("网站超市")>=1){setcur(4)}
	if(thispos.indexOf("公告信息")>=1){setcur(3)}
	if(thispos.indexOf("会员专区 ")>=1){setcur(5)}
	if(thispos.indexOf("联系我们")>=1){setcur(7)}
	//按钮点亮
	$(".imglink ul li").each(function(index, element) {
        if(index==0){$(this).css("padding-left","0px")}
    });
	$(".nvv ul li").hover(function(){
		$(".nvv ul li").removeClass("cur");
		$(this).addClass("cur");
	},function(){
	})
	$(".tb span").hover(function(){
		var dm=$(this).attr("dm");
		$("#a1").hide();
		$("#a2").hide();
		$("#a" + dm).show();
		$(".tb span").removeClass("cur");
		$(this).addClass("cur");
	},function(){
	})
	$(".nvv ul li").hover(function(){
		$(this).find("#xiala").show();
	},function(){
		$(this).find("#xiala").hide();
	})
})
function setcur(dom){
	$(".nav ul li").removeClass("cur");
	$(".nav ul li").each(function(index) {
        if(index==dom){$(this).addClass("cur")};
    });
}