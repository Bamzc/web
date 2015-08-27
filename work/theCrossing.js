$(function(){
    var TheCrossingConf = {
        "1" : {
            id : ""
        }
    }
	var TheCrossing = {
        leftTimes : 0,
        orderId : '',
        userLotteryId : '',
		init : function(){
            this.appendEle();
            this.initEle();
            this.initAbout();
            this.bindEvent();
		},
		initEle : function(){
            this.lotteryDrawBtn = $(".lottery_draw");
		},
		bindEvent : function(){
            var that = this;
            this.lotteryDrawBtn.click(function(){
                if($(this).hasClass("disable")) return;
                if(!Spirit.UserValidate.getUserInfo()){
                    Spirit.userLogin.openLetvLogin();
                    return;
                };
                that.prize(function(){
                    setTimeout(function (){

                    },3000);
                },function(){

                });
            });
        },
        initAbout : function(){
            var that = this;
            this.lotteryTimes(function(){
            },function(){
            });
        },
		silderMsg : function(){
			
		},
        appendEle : function(){
            $.fn.appendEle = function(options){
                $options = $.extend({},options);
                var content = "";
                for(var val in $options){
                    content += '<li>'+$options[val]+'</li>';
                }
                return $(this).append(content);
            };
        },
        prize : function(success,fail){
            var that = this ;
            var userInfo = Spirit.UserValidate.getUserInfo();
            $.ajax({
                url:'http://activity.zhifu.letv.com/drawlottery/prize',
                dataType:'jsonp',
                data:{
                    userid : userInfo.ssouid,
                    id : that.userLotteryId,
                    sign : '',
                    orderid : that.orderId
                },
                success:function(res){
                   res.flag == "true" ? success() : fail();
                },
                complete:function(){
                }
            });
        },
        lotteryTimes : function(success,fail){
            var that = this ;
            var userInfo = Spirit.UserValidate.getUserInfo();
            $.ajax({
                url:'http://activity.zhifu.letv.com/drawlottery/lotteryTimes',
                dataType:'jsonp',
                data:{
                    uid : userInfo.ssouid
                },
                success:function(res){
                    if(res.flag == "true"){
                        that.leftTimes = res.leftTimes;
                        that.orderId = res.orderId;
                        that.userLotteryId = res.userLotteryId;
                        success();
                    }else{
                        fail();
                    }
                },
                complete:function(){
                }
            });
        },
        sendPrize : function(){
            var that = this ;
            var sign=$.md5(id=1&userid=2222&bxy0210) ;
            var userInfo = Spirit.UserValidate.getUserInfo();
            $.ajax({
                url:'http://activity.zhifu.letv.com/drawlottery/sendPrize',
                dataType:'jsonp',
                data:{
                    userId : userInfo.ssouid,
                    Id : that.userLotteryId,
                    sign : ''
                },
                success:function(res){
                   res.flag == "true" ? success() : fail();
                },
                complete:function(){
                }
            });
        },
        dialog : function(params){
            var defaultParams = {
                title : '',
                content : '',
                boxClass : "ui_window bigwhite-dialog",
                height : 470,
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
        successDialog : function(){},
        getSuccessHtml : function(){}
	}
})