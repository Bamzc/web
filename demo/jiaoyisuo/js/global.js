



//实现按钮提交中的状态函数
//id 按钮ID值
function submiting(id){
	$("#"+id).attr("class","btn btn-warning");
	return $("#"+id).html("提交中，等待...");
}
function submitingByClass(name){
	$("."+id).attr("class","btn btn-warning");
	return $("."+name).html("提交中，等待...");
}

//置顶函数
//time 置顶速度 毫秒
function goTop(time){
	return $('body,html').animate({scrollTop:0},time);
}

//弹出窗口函数
//url 窗口内容网址
function openWindow(url){
	$.get(url, { action:"get" },   //读取url返回的html内容
			function(data, textStatus){ 
				$('#myModal').html(data);
			}); 
	return $('#myModal').modal('show');  //显示弹出窗口容器
}
//关闭弹出窗口
function closeWindow(){
	return $('#myModal').modal('hide');
}

//中间显示通知提示信息函数
//info 通知信息
function centerTip(info){
	var data = {
			"text":info,
			"layout":"center",
			"type":"success",
			"animateOpen": {"opacity": "show"}
	}
	return noty(data);
}

//中间显示错误提示信息函数
//info 错误信息
function centerError(info){
	var data = {
			"text":info,
			"layout":"center",
			"type":"error",
			"animateOpen": {"opacity": "show"}
	}
	return noty(data);
}

//中间显示加载提示信息函数
//info 错误信息
function centerLoading(){
	var data = {
			"text":"努力执行中...",
			"layout":"center",
			"type":"alert",
			"animateOpen": {"opacity": "show"}
	}
	return noty(data);
}

//返回上一页
function goBack(){
	return history.go(-1);
}

//IE不直持 new Date(time);
//兼容所有浏览器的格式化日期代码
function NewDate(str){
	str = str.split('-'); 
	var date = new Date(); 
	date.setUTCFullYear(str[0], str[1] - 1, str[2]); 
	date.setUTCHours(0, 0, 0, 0); 
	return date; 
}
var isMoney=new RegExp(/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/);



/**
 *  JS前端ajax验证表单输入方法
 *  此方法调用比较复杂
 *	需要在 验证的字段上添加onchange事件   通过事件调用此方法
 *	var option = {
 *	        url:"/seller/check_username_ajax",              //ajax提交地址
 *			field:"seller_username",                        //检查字段ID
 *			hiddenField:"seller_username_error",            //存放错误标识的隐藏域ID
 *			result:{success:0,fail:[{code:"1",txt:"账号名已存在"}]}  //返回对应结果数组	错误信息对应json的数组 可以显示多种错误
 *	}	
 *	调用此方法 需要页面中增加  隐藏域    隐藏域ID为hiddenField的值
 *	此方法调用后  还需要在表单提交的时候验证下 隐藏域的值
 */
function checkFieldAjax(option){
	var error = $("#error");
	var field = option.field;
	var errorField = option.hiddenField;
	var fail = option.result.fail;
	var data = {field:$("#"+field).val()}; 
	$.ajax({ 
		url: option.url,
		dataType: 'JSON',
		data: data,
		cache: false,
		global: false,	//不响应全局的ajax事件
		timeout: 10000,
		type: 'post',
		
		//请求成功
		success: function(data){
			//成功
			if(data.error==option.result.success){
				$("#"+errorField).val(option.result.success);
				error.hide();
			}else{
				//错误
				for(var o in fail){
					if(data.error==fail[o].code){
						$("#"+errorField).val(fail[o].code);
						$("#msg").html(fail[o].txt);
						error.show();
						goTop(0);  //置顶  看提示错误
						$("#"+field).focus();
						return false;
					}
				}
			}
			
		}
	});				
	
	
}

/**
 * 邮箱验证函数
 * 
 */
function checkEmail(id){
	var temp = document.getElementById(id);
    //对电子邮件的验证
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(temp.value))
    {
        return false;
    }
    return true;
}