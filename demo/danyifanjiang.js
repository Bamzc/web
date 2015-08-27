(function () {
	var obj  = {},
		dialogArray = {
			"1" : {
				width : 300,
				height : 400,
				mobile : "手机号",
				name : "姓名",
				address : "地址",
				title : "",
				btn : ""
			}
		},
		template = function (obj,diarray){
			this.arr = [];
			this.obj = obj;
			this.diarray = diarray;
			// console.log(diarray)
			typeof diarray === "object" ? $.extend(this.diarray,dialogArray,diarray) : this.diarray = {};
		};
	template.prototype = {
        dialog : function(params){
            var defaultParams = {
                title : '',
                content : '',
                boxClass : "ui_window bigwhite-dialog",
                height : 450,
                width : 500,
                mask : .5,
                zIndex : 1e5
            }
            var  box = new LETV.UI.Box($.extend({},defaultParams,params));
            box.init();
            box.show();
            /*box.find('.js_close').click(function(){
                box.hide();
            })*/
            return box ;
        },
        temDialog : function(){
        	var that = this,this.getTemHtml();
        	for (var i = 0;i < this.arr.length;i++){
        		var obj = {content:arr[i]};
        		$.extend(obj,that.diarray[i+1]);
        		var dia = that.dialog(obj);
        	}	
        },
        getTemHtml : function(){
        	var that = this,
        		title = "",
        		btnValue = "",
        		mobile = "",
        		name = "",
        		address = "";
        	var dia = this.diarray ;
        	dia &&	for (o in dia){
        		typeof o === "object" && o ? for(key in o){
	        		key == "mobile" && mobile = dia[key];
	        		key == "name" && name = dia[key];
	        		key == "address" && address = dia[key];
	        		key == "title" && title = dia[key];
	        		key == "btnValue" && btnValue = dia[key];
	        		var str1 = (mobile && mobile == "手机号" && '<li class="liList03 mt30">'+
                                '手机<input type="text" value="请输入您的手机号">'+
                                '<label>请填写手机号码</label></li>') || "";
		        	var str2 = (name && name == "姓名" && 
		                            '<li class="liList03 user_name">'+
		                                '姓名<input type="text" value="请输入您的姓名">'+
		                                '<label>请填写您的姓名</label></li>') || "";
		        	var str3 = (address && address == "地址" && '<li class="liList03 user_address">'+
                                '地址<input type="text" value="请输入您的地址">'+
                                '<label>请填写您的地址</label></li>') || "";
		        	var str = that.htmlDisp(title,descip,str1,str2,str3,btn);
		        	that.arr.push(str);
        		}
        	};
        },
        htmlDisp : function(title,descip,str1,str2,str3,btn){
        	return '<div class="window-box">'+
                        '<ul>'+
                            '<li class="liList01">'+title+'</li>'+
                            '<li class="liList04">'+
                                '<span><b>'+descip+'</b></span>'+
                            '</li>'+
                            '<li class="liList05_01 "></li>'+
                            '<li class="liList10_01"></li>'+str1+str2+str3+
                            '<li class="submitBtn">'+btn+'</li>'+
                        '</ul>'+
                    '</div>';
        },
		init : function(){
			this.temDialog();
		}
	};

})();