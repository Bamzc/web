$(function(){
	var thispos=$(".position").text()+"";
	if(thispos.indexOf("������")>=1){setcur(1)}
	if(thispos.indexOf("���Ŷ�̬")>=1){setcur(2)}
	if(thispos.indexOf("��վ����")>=1){setcur(4)}
	if(thispos.indexOf("������Ϣ")>=1){setcur(3)}
	if(thispos.indexOf("��Աר�� ")>=1){setcur(5)}
	if(thispos.indexOf("��ϵ����")>=1){setcur(7)}
	//��ť����
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