/*
 * Create by Baizc
 */
 $(function(){ 
    var MFree_concertConf = {
        "1" : {
            activityId : "",
            activityName : "",
            buttonValue : ""
        },
        "2" : {
            activityId : "",
            activityName : "",
            buttonValue : ""
        },
        off : false
    };
 	var MFree_concert = {
        
        init : function(){
            this.btnSuitWine = $(".free_watch");//
            this.btnMovieTickets = $(".live_tickets");//
            this.btnFcoPeripheral = $(".fcoPeripheral");//
            // this.btnExp7daysMembership = $(".Exp7daysMembership");//Experience 7 days membership，体验7天会员
            this.day = $(".day");
            this.hour = $("hour");
            this.min = $("min");
            this.showTime = "2015/7/20 12:00:00"
            // this.second = $("");
        },
        initEle : function(){},
        initAbout : function(){
            var that = this;
            if(Activity.off == true) return;
            if(!Spirit.UserValidate.getUserInfo()) return;
            this.hasAuth(function(){
               
            });
        },
        bindEvent : function(){
            var that = this;
            if(!Spirit.UserValidate.getUserInfo()){
                Spirit.Event.addEvent("loginSuccess",function(){
                    window.location.reload();
                });
            }else{
                Spirit.Event.addEvent("logoutSuccess",function(){
                    window.location.reload();
                });
            }
            if(Activity.off != true){
                this.btnSuitWine.click(function(){
                    if(!Spirit.UserValidate.getUserInfo()){
                        Spirit.userLogin.openLetvLogin();
                        return;
                    }
                });
                this.btnMovieTickets.click(function(){
                    if(!Spirit.UserValidate.getUserInfo()){
                        Spirit.userLogin.openLetvLogin();
                        return;
                    }
                });
            }
        },
        hasAuth : function(){

        },
        getUserInfoDialog : function(v){
            var that=this;
            var dia =that.dialog({content:that.getUserInfoHtml()});
            dia.cont.find('.t_close').click(function(){
                dia.hide();
            })
        },
        getSuccessDialog : function(){

        },
        getDate : function(cb){
            var util = LETV.using('Util');
            var timeService = util.timeService;
            this.time++;
            if(this.time==1){
                timeService.update(function(time){
                    cb(time);
                })
            }else{
                timeService.get(function(time){
                    cb(time);
                })
            }
        },
        setTimer : function(){
            var that = this;
            var showTime = new Date(this.showTime);
            var nowDate = new Date();
            this.getDate(function(time){
                var t =showTime.getTime() - time*1000;
                if(t <= 0){
                    return;
                }else{

                }
                var d=Math.floor(t/1000/60/60/24);
                var h=Math.floor(t/1000/60/60%24);
                var m=Math.floor(t/1000/60%60);
                var s=Math.floor(t/1000%60);
                if(d<10){
                    d='0'+d;
                }
                if(h<10){
                    h='0'+h;
                }
                if(m<10){
                    m='0'+m;
                }
                if(s<10){
                    s='0'+s;
                }
                that.day.html(d);
                that.hour.html(h);
                that.min.html(m);
                // that.second.html(s);
                setTimeout(function(){
                    // that.isFirst=false;
                    that.setTimer();
                },1000);
            });
        },
        getUserInfoHtml : function(){

        },
        getSuccessHtml : function(){

        }
    }
 })