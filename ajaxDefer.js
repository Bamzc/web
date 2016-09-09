/**
 *1.返回承诺给出的回调的返回值
 *2.如果没有给出承诺，
 *  我们将强迫返回值，立即执行我们定义的回调。
 **/
var ref = function (value) {
	if (value && typeof value.then === "function")
        return value;
    return {
        then: function (callback) {
            return ref(callback.apply(this,value));
        }
    };
};
var defer = function(){
    var pending = [],value;
	return {
    	resolve : function(_value){
    		/**
    		 *ref此时考虑到如果_value为一个对象,
    		 *  并且包含then方法(需要自行处理的callback),
    		 *  执行完毕返回一个自己定义的函数或者值
    		 *  obj = {
			 *		then : function(callback){
			 *			callback.apply(this,value)
			 *		}
    		 *  }
    		 *  value = ref(obj)
    		 **/
    		value = ref(_value);
    		for (var i = 0, ii = pending.length; i < ii; i++) {
	            var callback = pending[i];
	            value.then.call(value,callback);
		    }
		    pending = undefined;
    	},
    	//承诺者需要做的事情
    	promise : {
    		done : function (callback) {
	        	if(pending){
	        		pending.push(callback);
	        	}else{
	        		callback(value);
	        	}
	        }
    	}
    };
}; 
var when = function () {
    var n = 0,
        resolveValues = arguments,
        length = arguments.length,
        result = defer(),
        o = {},
        jsonToArry = function(obj){
            var arr = [],i=0;
            for(var k in obj){
                arr.push(obj[k]);
            }

            return arr;
        },
        callback = function(contexts){
            n++;
            if(n === length){
                var arr = jsonToArry(o);
                result.resolve(arr,contexts);
            } 
        },
        updateFunc = function(i,values,contexts){
            values[contexts](function(){
                o[i] = arguments[0];
                callback(contexts);
            });

        }
        for(var i=0;i<length;i++){
            updateFunc(i,resolveValues[i],"success");
        }
        return result.promise;
};
/*
 *@usage
 *when(ajax1,ajax2,...).done(a,b,...)
 */
module.exports = when;