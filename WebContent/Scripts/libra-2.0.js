/*
author  : 余祥 
version : 2
email   : yuxiangs0911@163.com

description: 基于jQuery的一个JS库，封装了一些常用的功能
*/

(function (window, jQuery) {
    var libra,

        $ = jQuery,

        stringRegex = {
            trimLeft: /^\s+/,
            trimRight: /\s+$/,
            getNum: /[^\d]/g,
            getEn: /[^A-Za-z]/g,
            getCn: /[^\u4e00-\u9fa5\uf900-\ufa2d]/g
        },

        validatorRegex = {
            mobile: /^(1[3,5,8][0-9])\d{8}$/,
            phone: /^(\d{3,5}-?)?\d{7,9}$/,
            postcode: /^[1-9]\d{5}(?!\d)/,
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
            integer: /^\d+$/,
            chinese: /^[^u4e00-u9fa5]+$/,
            letter: /^[a-zA-z]+$/
        },

        browserRegex = {
            ie: /msie ([\d.]+)/,
            ie11: /(trident)\/([\d.]+)/,
            firefox: /firefox\/([\d.]+)/,
            opera: /opera.([\d.]+)/,
            safari: /version\/([\d.]+).*safari/,
            chrome: /chrome\/([\d.]+)/
        },
        userAgent = navigator.userAgent,

        toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty,
        push = Array.prototype.push,
	    slice = Array.prototype.slice,
        sort = Array.prototype.sort,
        splice = Array.prototype.splice,
	    trim = String.prototype.trim,
	    indexOf = Array.prototype.indexOf,

        class2type = {}
        ;

    libra = {
        version: "2.0",

        type: function (obj) {
            return obj === null || obj === undefined ?
                String(obj) :
                class2type[toString.call(obj)] || "object";
        },

        namespace: function (name) {
            /// <summary>注册命名空间</summary>
            if (string.isInvalid(name)) {
                libra.error("名字空间值是必须的！");
            }
            if (name.charAt(0) === "." || name.charAt(name.length - 1) === "." || name.indexOf("..") != -1) {
                libra.error("非法的名字空间值：" + name);
            }

            var parts = name.split(".");
            var o = window;
            for (var i = 0, len = parts.length; i < len; i++) {
                o[parts[i]] = o[parts[i]] || {};
                o = o[parts[i]];
            }
        },

        moduleList: [],

        loadModule: function (name, fn) {
            /// <summary>加载一个模块</summary>
            /// <param name="name" type="String">模块名称</param>
            /// <param name="fn" type="Function">模块方法</param>

            if (string.isInvalid(name) || !libra.isFunction(fn)) {
                libra.error("模块名称或方法不正确");
            }
            if (libra.moduleList.hasOwnProperty(name)) {
                libra.error("已存在此模块对象")
            }

            moduleList[name] = new Object();
            jQuery(function () {
                fn.call(moduleList[name]);
                if (moduleList[name].init) o.init();
                if (moduleList[name].bindEvent) o.bindEvent();
            });

        },

        log: (window.console && console.log) ?
             function (message) { console.log(message); } :
             function (message) { alert(JSON.stringify(message)); }
        ,

        error: function (message) {
            throw new Error(message);
        },

        isEmptyObject: function (obj) {
            /// <summary>是否是空对象</summary>
            for (var name in obj) {
                return false;
            }
            return true;
        },

        _extend: function (obj) {
            for (var i in obj) {
                libra[i] = obj[i];
            }
        }
    };

    // 浏览器相关
    libra._extend({
        addfavorite: function (siteName, siteUrl) {
            /// <summary>加入收藏夹</summary>
            /// <param name="siteName" type="String">网站名称</param>
            /// <param name="siteUrl" type="String">网站地址</param>

            if (string.isInvalid(siteName) || string.isInvalid(siteUrl)) {
                libra.error("无效的网站名称或网站地址");
            }
            if (document.all) {
                window.external.addFavorite(siteUrl, siteName);
            }
            else if (window.sidebar) {
                window.sidebar.addPanel(siteName, siteUrl, "");
            } else {
                alert("加入收藏失败，请使用Ctrl+D进行添加。");
            }
        },
        uaMatch: function () {
            var ua = userAgent.toLowerCase();
            var match = [];

            for (var i in browserRegex) {
                var m = ua.match(browserRegex[i]);
                if (m) {
                    match[0] = i;
                    match[1] = m[1];
                    break;
                }
            }

            return { browser: match[0] || "", version: match[1] || "0" };
        }
    });

    // dom 相关
    libra._extend({
        get: function (id) {
            /// <summary>获取一个Dom元素</summary>
            return libra.isString(id) ? document.getElementById(id) : id;
        }
    });

    // 事件相关
    libra._extend({
        getEvent: function (e) {
            /// <summary>获取Event对象</summary>
            /// <param name="e" type="Object">Event对象</param>
            return e || window.event;
        },
        stopPropagation: function (e) {
            /// <summary>停止冒泡</summary>
            /// <param name="e" type="Object">Event对象</param>
            if (e.stopPropagation) {
                e.stopPropagation();
            } else if (window.event) {
                window.event.cancelBubble = true;
            }
        },
        getEventTarget: function (e) {
            e = libra.getEvent(e);
            return e.target || e.srcElement;
        },
        getCharFromKeyPress: function (e) {
            /// <summary>从按键中获取字符</summary>
            /// <param name="e" type="Object">Event对象</param>
            var keychar;
            var keynum;

            keynum = libra.getNumFromKeyPress(e);
            keychar = String.fromCharCode(keynum);

            return keychar;
        },
        getNumFromKeyPress: function (e) {
            /// <summary>从按键中获取Ascii码</summary>
            /// <param name="e" type="Object">Event对象</param>
            var keynum;

            // IE
            if (window.event) {
                keynum = e.keyCode;
            }
            // Netscape/Firefox/Opera
            else if (e.which) {
                keynum = e.which;
            }

            return keynum;
        }
    });

    // 常用验证
    libra._extend({
        isIDCard: function (idcard) {
            ///	<summary>
            /// 身份证验证 正确返回"ok" ， 错误返回错误消息
            ///	</summary>

            var Errors = ["ok",
                          "身份证号码位数不对!",
                          "身份证号码填写不正确，请仔细核对!", //出生日期超出范围或含有非法字符
                          "身份证号码填写不正确，请仔细核对!", //校验错误
                          "身份证号码填写不正确，请仔细核对!"]; //地区非法

            var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "xingjiang", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
            var idcard, Y, JYM, result = 0;
            var S, M;
            var idcard_array = new Array();
            idcard = idcard.toUpperCase();
            idcard_array = idcard.split("");
            //地区检验 
            if (area[parseInt(idcard.substr(0, 2))] == null) {
                result = 4;
            } else {
                //身份号码位数及格式检验 
                switch (idcard.length) {
                    case 15:
                        if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
                            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
                        } else {
                            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
                        }
                        if (!ereg.test(idcard)) {
                            result = 2;
                        }
                        break;
                    case 18:
                        //18位身份号码检测 
                        //出生日期的合法性检查   
                        //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
                        //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
                        if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
                            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
                        } else {
                            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
                        }
                        if (ereg.test(idcard)) {//测试出生日期的合法性 
                            //计算校验位 
                            S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
			            + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
			            + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
			            + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
			            + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
			            + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
			            + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
			            + parseInt(idcard_array[7]) * 1
			            + parseInt(idcard_array[8]) * 6
			            + parseInt(idcard_array[9]) * 3;
                            Y = S % 11;
                            M = "F";
                            JYM = "10X98765432";
                            M = JYM.substr(Y, 1); //判断校验位 
                            if (M != idcard_array[17]) {
                                result = 3;
                            }
                        } else {
                            result = 2;
                        }
                        break;
                    default:
                        result = 1;
                        break;
                }
            }
            return Errors[result];
        },
        likePhone : function(value){
        	var reg = /^[0-9\-]+$/;

        	return reg.test(value);
        },
        isPhone: function (value) {
            /// <summary>电话号码验证</summary>
            return validatorRegex.phone.test(value);
        },
        isMobile: function (value) {
            /// <summary>手机号码验证</summary>
            return value.length === 11 && validatorRegex.mobile.test(value);
        },
        isPostCode: function (value) {
            /// <summary>邮编验证</summary>
            return validatorRegex.postcode.test(value);
        },
        isEmail: function (value) {
            /// <summary>Email验证</summary>
            return validatorRegex.email.test(value);
        },
        isUrl: function (value) {
            /// <summary>Url验证</summary>
            return validatorRegex.url.test(value);
        },
        isInteger: function (value) {
            /// <summary>整数验证</summary>
            return validatorRegex.integer.test(value);
        },
        isChinese: function (value) {
            /// <summary>中文验证</summary>
            return validatorRegex.chinese.test(value);
        },
        isLetter: function (value) {
            /// <summary>字母验证</summary>
            return validatorRegex.letter.test(value);
        },
        isNumeric: function (value) {
            /// <summary>是否是数字 包括小数</summary>
            return !string.isInvalid(value) && !isNaN(value);
        }
    });

    // 类型检测
    libra._extend({
        isString: function (o) {
            return libra.type(o) === "string";
        },
        isBoolean: function (o) {
            return libra.type(o) === "boolean";
        },
        isFunction: function (o) {
            return libra.type(o) === "function";
        },
        isArray: Array.isArray ? Array.isArray : function (o) {
            return libra.type(o) === "array";
        },
        isObject: function (o) {
            return libra.type(o) === "object";
        },
        isNumber: function (o) {
            return libra.type(o) === "number";
        },
        isDate: function (o) {
            return libra.type(o) === "date";
        }
    });

    // 初始化
    libra._init = function () {
        // 初始化浏览器相关信息
        var browserMatch = libra.uaMatch();
        if (browserMatch.browser) {
            libra.browser = {};
            libra.browser[browserMatch.browser] = true;
            libra.browser.version = browserMatch.version;
            if (libra.browser.ie && parseInt(libra.browser.version, 10) === 6) {
                libra.browser.ie6 = true;
            }
        }

     
        // 初始化存储类型信息
        var typeArr = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"];
        for (var i = 0, len = typeArr.length; i < len; i++) {
            var item = typeArr[i];
            class2type["[object " + item + "]"] = item.toLowerCase();
        }
    } ();

    // 内置对象扩展
    // String
    String.prototype.contains = String.prototype.contains || function (value) {
        /// <summary>是否包含指定的字符串</summary>
        return this.indexOf(value) !== -1;
    };
    String.prototype.trimLeft = String.prototype.trimLeft || function () {
        /// <summary>去除字符串的前面空格</summary>
        return this.replace(stringRegex.trimLeft, "");
    };
    String.prototype.trimRight = String.prototype.trimRight || function () {
        /// <summary>去除字符串的后面空格</summary>
        return this.replace(stringRegex.trimRight, "");
    };
    String.prototype.trimStart = function (prefix) {
        /// <summary>移除字符串中指定的所有前导匹配项。</summary>
        /// <param name="prefix" type="String">要移除的字符串</param>
        /// <param name="prefix" type="String">要移除的字符串</param>
        if (this.startsWith(prefix)) {
            return this.slice(prefix.length);
        }
        return this;
    };
    String.prototype.trimEnd = function (suffix) {
        /// <summary>移除字符串中指定的所有尾部匹配项。</summary>
        /// <param name="suffix" type="String">要移除的字符串</param>
        if (this.endsWith(suffix)) {
            return this.slice(0, this.length - suffix.length);
        }
        return this;
    };
    String.prototype.trim = String.prototype.trim || function () {
        /// <summary>移除所有前导空白字符和尾部空白字符。</summary>
        return this === "" ? "" : this.trimLeft().trimRight();
    };
    String.prototype.startsWith = String.prototype.startsWith || function (prefix) {
        /// <summary>确定此字符串实例的开头是否与指定的字符串匹配。</summary>
        /// <param name="prefix" type="String">要比较的字符串。</param>
        return this.substr(0, prefix.length) === prefix;
    };
    String.prototype.endsWith = String.prototype.endsWith || function (suffix) {
        /// <summary>确定此字符串实例的结尾是否与指定的字符串匹配。</summary>
        /// <param name="suffix" type="String">要与此实例末尾的子字符串进行比较的字符串</param>
        return this.substr(this.length - suffix.length) === suffix;
    };
    String.prototype.getNum = function () {
        /// <summary>获取字符串中的数字</summary>
        return this.replace(stringRegex.getNum, "");
    };
    String.prototype.getEn = function () {
        /// <summary>获取字符串中的英文</summary>
        return this.replace(stringRegex.getEn, "");
    };
    String.prototype.getCn = function () {
        /// <summary>获取字符串中的中文</summary>
        return this.replace(stringRegex.getCn, "");
    };

    // Date
    Date.prototype.format = function (format) {
        ///	<summary>
        /// 格式化为日常日期
        ///	</summary>
        /// <param name="format">默认：yyyy-MM-dd hh:mm:ss</param>

        if (!format) {
            format = "yyyy-MM-dd hh:mm:ss";
        }
        var o = {
            "M+": this.getMonth() + 1, //month    
            "d+": this.getDate(),    //day    
            "h+": this.getHours(),   //hour    
            "m+": this.getMinutes(), //minute    
            "s+": this.getSeconds(), //second    
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter    
            "S": this.getMilliseconds() //millisecond    
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
    Date.prototype.formatDate = function (format) {
        /// <summary>格式化为日期 yyyy-MM-dd</summary>
        return this.format("yyyy-MM-dd");
    };
    Date.prototype.formatTime = function (format) {
        /// <summary>格式化为时间 hh:mm:ss</summary>
        return this.format("hh:mm:ss");
    };
    Date.prototype.getWeekDay = function () {
        ///	<summary>
        /// 得到本地化的星期表示  "一", "二", "三", "四", "五", "六" , "日"
        ///	</summary>
        var week = ["日", "一", "二", "三", "四", "五", "六"];
        return week[this.getDay()];
    };
    Date.prototype.addDay = function (day) {
        ///	<summary>
        /// 增加天数
        ///	</summary>
        var date = libra.getDateFromUnix(this.setDate(this.getDate() + day));
        return date;
    };
    Date.prototype.addMonth = function (month) {
        ///	<summary>
        /// 增加月份
        ///	</summary>
        var date = libra.getDateFromUnix(this.setMonth(this.getMonth() + month));
        return date;
    };
    Date.prototype.addYear = function (year) {
        ///	<summary>
        /// 增加年份
        ///	</summary>
        var date = libra.getDateFromUnix(this.setFullYear(this.getFullYear() + year));
        return date;
    };
    Date.now = Date.now || function () {
        /// <summary>当前时间 时间戳</summary>
        return new Date().getTime();
    };

    // Array
    Array.prototype.indexOf = Array.prototype.indexOf || function (searchElement) {
        /// <summary>搜索数组，并返回搜索到的第一个匹配项的从零开始的索引，未找到返回-1</summary>
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
    Array.prototype.contains = Array.prototype.contains || function (item) {
        /// <summary>是否包括数组项</summary>

        return libra.isArray(this) && this.indexOf(item) !== -1;
    };
    //    Array.prototype.lastIndexOf = Array.prototype.lastIndexOf || function (searchElement) {
    //        /// <summary>搜索数组，并返回搜索到的最后一个匹配项的从零开始的索引，未找到返回-1</summary>
    //        if (this == null)
    //            throw new TypeError();

    //        var t = Object(this);
    //        var len = t.length >>> 0;
    //        if (len === 0)
    //            return -1;

    //        var n = len;
    //        if (arguments.length > 1) {
    //            n = Number(arguments[1]);
    //            if (n != n)
    //                n = 0;
    //            else if (n != 0 && n != (1 / 0) && n != -(1 / 0))
    //                n = (n > 0 || -1) * Math.floor(Math.abs(n));
    //        }

    //        var k = n >= 0
    //          ? Math.min(n, len - 1)
    //          : len - Math.abs(n);

    //        for (; k >= 0; k--) {
    //            if (k in t && t[k] === searchElement)
    //                return k;
    //        }
    //        return -1;
    //    };
    //    Array.prototype.copy = function () {
    //        /// <summary>拷贝一个数组</summary>
    //        return this.concat();
    //    };
    //    Array.prototype.clear = function () {
    //        /// <summary>清空数组</summary>
    //        this.length = 0;
    //    };
    //    Array.prototype.insert = function (index, item) {
    //        /// <summary>向数组中的指定位置插入一个元素</summary>
    //        this.splice(index, 0, item);
    //    };
    //    Array.prototype.insertRange = function (index, items) {
    //        /// <summary>向数组中指定的位置插入多个元素或数组</summary>
    //        if (libra.isArray(items)) {
    //            this.splice(index, 0, items);
    //        }
    //        else {
    //            this.splice(index, 0, Array.apply(null, arguments).slice(1));
    //        }
    //    };
    //    Array.prototype.remove = function (item) {
    //        /// <summary>删除数组中的元素</summary>
    //        /// <param name="item" type="object">要删除的元素</param>
    //        var index = this.indexOf(item);
    //        if (index !== -1) {
    //            this.splice(index, 1);
    //        }
    //    };
    //    Array.prototype.removeAt = function (index) {
    //        /// <summary>删除数组中指定位置的元素</summary>
    //        /// <param name="index" type="Number">要删除元素的索引</param>
    //        this.splice(index, 1);
    //    };
    //    Array.prototype.unique = function () {
    //        /// <summary>去掉数组中重复的项</summary>
    //        var arr = [];
    //        for (var i = 0, len = this.length; i < len; i++) {
    //            if (!arr.contains(this[i])) {
    //                arr.push(this[i]);
    //            }
    //        }
    //        return arr;
    //    };

    // util
    libra._extend({
    	/*
    	 * 获取Form表单内数据的快捷方法
    	 * @param souce 可以是表单ID或者,Jquery对象
    	 * @param trim 是否自动清空空格，默认为清空
    	 */
    	getFormParams : function(source,trim){
    		switch ($.type(source)) {
        		case "string": source = $('#' + source); break;
        		case "object": if (!source.jquery) {
                					source = $(source);
            					} break;
    		}
    		trim = trim === undefined ? true : trim;
    		var $eles = source.find(':text,:password,input:hidden,select,:radio,:checkbox,:file,img,textarea');
    		var result = {};
    		for (var i = 0, count = $eles.length; i < count; i++) {
        		var $e = $($eles[i]);
        		var key = $e.attr('name');
        		var val = "";
        		if ($e.is('img')) {
            		val = $e.attr('src');
            		if (val.indexOf('noimage.png') != -1) {
                		val = '';
            		}
        		}
        		else if ($e.is('input:checkbox')) {
            		val = $e[0].checked;
        		}
  				else {
            		val = $e.val();
        		}
        		if (key && result[key] === undefined) {
            		if (trim) {
                		val = $.trim(val);
            		}
            		result[key] = val || "";
        		}
    		}

    		return result;
    	},
    	/*
    	 * 将地址栏参数值转换成对象
    	 * @param search 地址栏参数值 
    	 * @param ignorecase 忽略大小写,默认忽略
    	 */
    	getUrlParams : function(search,ignorecase){
    		var reg = /([^\?#&]+)=([^\?#&]*)/g;
    		var result = {};
    		ignorecase = ignorecase === undefined ? true : ignorecase;
    		do {
        		var arr = reg.exec(search);
        		if (arr) {
            		var attr = arr[1];
            		if (ignorecase) {
                		attr = attr.toLowerCase();
            		}
            		result[attr] = arr[2];
        		}
    		}
    		while (arr);

    		return result;
    	},
        getDateFromUnix: function (unixTime) {
            /// <summary>从unix时间戳中获限取Date对象</summary>
            var d = new Date();
            unixTime = String(unixTime);
            if (unixTime.length === 10) {
                unixTime += "000";
            }
            d.setTime(unixTime);
            return d;
        },
        deserialize: function (objectString) {
            /// <summary>把类似于 ' wd=music&rsv_spt=1&issp=1 '的一个字符串解析成一个对象</summary>

            var keys = {};

            var e, k, v,
                r = /([^&=]+)=?([^&]*)/g,
                a = /\+/g,
                d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                param = objectString;

            var ch = param.charAt(0);
            if (ch === '?' || ch === '#') {
                param = param.slice(1);
            }

            while (e = r.exec(param)) {
                k = d(e[1]);
                v = d(e[2]);
                keys[k] = v;
            }

            return keys;
        },
        formatMVCDate: function (dateString) {
            /// <summary>格式化MVC传到前台的日期字符串为日期对象</summary>
            /// <param name="dateString" type="String">日期字符串</param>

            if (string.isInvalid(dateString)) {
                return "";
            }
            dateString = String(dateString);
            var index = dateString.indexOf("(") + 1;
            dateString = dateString.slice(index, dateString.lastIndexOf(")"));
            var plusIndex = dateString.indexOf("+");
            if (plusIndex !== -1) {
                dateString = dateString.slice(0, plusIndex);
            }
            return libra.getDateFromUnix(dateString);
        },
        createDate: function (dateString) {
            /// <summary>从一个字符串中创建Date对象</summary>
            /// <param name="dateString" type="String">日期字符串</param>
            dateString = dateString.replace(/-/g, '/');
            return new Date(dateString);
        }
    });

    // string
    var string = {
        format: function (value, args) {
            /// <summary>将指定字符串中的一个或多个格式项替换为指定对象的字符串表示形式。</summary>
            /// <param name="value" type="String">复合格式字符串。</param>
            /// <param name="args" type="Object">要设置格式的对象，可以为多个。</param>
            if (arguments.length === 0) return "";

            var str = value;
            for (var i = 1, len = arguments.length; i < len; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
            return str;
        },
        isInvalid: function (s) {
            /// <summary>指示指定的字符串是否是无效的字符串 无效的字符串包括 null、undefined、空、仅由空白字符。</summary>
            /// <param name="s" type="String">要测试的字符串</param>
            if (s === "" || s === null || s === undefined) {
                return true;
            }
            else {
                var str = String(s).trim();
                return !str;
            }
        }
    }

    var formElementType = {
        text: "text",
        hidden: "hidden",
        textarea: "textarea",
        select: "select",
        radio: "radio",
        checkbox: "checkbox"
    }

    function getInputTagName(input) {
        var tagName = input.tagName.toLowerCase();

        // 如果是input标签，还要看它的type
        return tagName === "input" ? input.type : tagName;
    }

    libra.loadFormData = function (wrapSelector, data) {
        /// <summary>把对象加载到form表单中</summary>
        /// <param name="wrapSelector" type="jQuerySelector">jQuery 选择器</param>
        /// <param name="data" type="Object">要加载到表单的对象（object的属性名称和表单项的名称不区分大小写）</param>

        var $wrap = $(wrapSelector);
        if (!$wrap.length) {
            libra.error("未找到元素：" + wrapSelector);
        }
        if (libra.isEmptyObject(data)) {
            return;
        }
        if ($wrap.is("form")) {
            $wrap[0].reset();
        } else {
            libra.clearForm($wrap);
        }
        var $inputs = $wrap.find(":input");
        for (var i = 0, len = $inputs.length; i < len; i++) {
            var item = $inputs[i], name = item.name, tagName = getInputTagName(item);
            // 获取表单项对应数据对象中的值，不区分大小写
            var currentValue = libra.getObjectPropertyValue(data, name, true);
            // currentValue是html表单元素对应data对象中的值
            if (currentValue !== undefined && currentValue !== null) {
                if (tagName === formElementType.textarea || tagName === formElementType.text || tagName === formElementType.hidden) {
                    item.value = currentValue;
                }
                else if (tagName === formType.select) {
                    var options = item.getElementsByTagName("option");
                    for (var j = 0, optionLength = options.length; j < optionLength; j++) {
                        var option = options[j];
                        // 这里不用全等，允许option中的value '0' == 0
                        if (option.value == currentValue) {
                            option.selected = true;
                            break;
                        }
                    }
                }
                else if (tagName === formType.radio) {
                    // 允许 '0' == 0
                    item.checked = (item.value == currentValue);
                }
                else if (tagName === formType.checkbox) {
                    if (currentValue === true || currentValue === 1 || String(currentValue).toLowerCase() === "true") {
                        item.checked = true;
                    } else if (currentValue === false || currentValue === 0 || String(currentValue).toLowerCase() === "false") {
                        item.checked = false;
                    }
                }

            }

        } // end for
    };

    libra.serialize = function (root, params) {
        /// <summary>基于jQuery serialize</summary>
        /// <param name="root" type="Object">root一般为form元素，这里可以传dom元素、jquery对象、jquery选择器</param>
        /// <param name="params" type="Object">一个附加到root序列化后的对象上</param>

        var $root = $(root);

        if (!$root.length) libra.error("未找到root");

        if (params) {
            return root.serialize() + "&" + jQuery.param(params);
        }
        else {
            return root.serialize();
        }
    };

    libra.cookie = {

        // document.cookie 得到的是一个字符串，其中包含当前文档的所有cookie ( 'name=yuxiang;sex=male' 以分号隔开 )

        // 设置cookie 有以下属性
        // name     一个唯一确定cookie的名称
        // value    储存在cookie中的字符值，值必须以URL编码，以确保值中不出现逗号、空格、分号这样的值，这些值不被接受
        // domain   domain 像 '.example.com' (包含所有子域名)、'subdomain.example.com' 如未指定,默认为当前文档的主机名
        // path     (String or null): 像 "/", "/mydir"; 如果未指定,默认为当前文档的当前路径  它的同级目录和它的子级目录可访问cookie （这里的目录是url路径）
        // expires  过期时间，如果是数字就是天数，可以传一个 Date对象，最后转换成UTC时间 
        // secure   是否希望只通过https的协议传送

        get: function (name) {

            var cookieName = encodeURIComponent(name) + "=";
            var startIndex = document.cookie.indexOf(cookieName);

            if (startIndex === -1) return null;

            // 搜索从‘name=’ 到‘;’ 目的找到 cookie value
            var endIndex = document.cookie.indexOf(";", startIndex);

            // 没有搜索到‘;’说明是最后一个cookie
            if (endIndex === -1) {
                endIndex = document.cookie.length;
            }

            var value = decodeURIComponent(document.cookie.slice(startIndex + cookieName.length, endIndex));

            return value;

        },

        set: function (name, value, expires, path, domain, secure) {

            var cookie = "";

            if (libra.isNumber(expires)) {
                var d = new Date();
                expires = d.setDate(d.getDate() + expires);
            }

            cookie = [
                encodeURIComponent(name) + "=" + encodeURIComponent(String(value)),
                expires ? "; expires=" + expires.toUTCString() : "",
                path ? "; path=" + path : "",
                domain ? "; domain=" + domain : "",
                secure ? "; secure" : ""
            ].join("");

            document.cookie = cookie;
        },

        remove: function (name, path, domain, secure) {
            // 设置一个时间让它过期，new Date(0)就是1970-01-01 08:00:00
            this.set(name, "", new Date(0), path, domain, secure);
        }

    };

    // url中的hash
    libra.queryHash = {
        get: function (key) {
            var keys = libra.deserialize(location.hash);
            return keys[key];
        },

        set: function (key, value) {
            var keys = libra.deserialize(location.hash);

            if (libra.isObject(key) && value === undefined) {
                for (var k in key) {
                    keys[k] = key[k];
                }
            }
            else {
                keys[key] = value;
            }

            location.hash = "#" + jQuery.param(keys);
        }
    };

    libra.redirectUrl = function (url, params, position, type) {
        /// <summary>跳转到其它地址</summary>
        /// <param name="url" type="String">url</param>
        /// <param name="params" type="Object">参数，一个键值对的对象</param>
        /// <param name="type" type="String">normal、hash</param>
        /// <param name="position" type="String">传top表示在顶级窗口，没传代表本窗口，其它可以传iframe的ID</param>

        if (string.isInvalid(url)) {
            libra.error("无效的url");
        }

        var type = type || "normal";
        if (params) {
            switch (type) {
                case "normal": url += "?"; break;
                case "hash": url += "#"; break;
            }
            url += jQuery.param(params);
        }

        if (position === "top") {
            top.location.href = url;
        }
        else if (position) {
            top.document.getElementById(position).src = url;
        }
        else {
            location.href = url;
        }

        return false;
    }

    libra.domElementIsInit = function (domID) {
        /// <summary>dom元素是否已经加载到document中</summary>
        /// <param name="domID" type="String">ID名称</param>
        var element = libra.get(domID);
        return element !== undefined && element !== null;
    }

    libra.clearForm = function (wrapSelector) {
        /// <summary>清空表单内容</summary>
        /// <param name="selector" type="jQuerySelector">jQuery 选择器</param>

        var $wrap = $(selector);
        if (!$wrap.length) {
            libra.error("未找到选择器：" + selector);
        }

        if ($wrap.is("form")) {
            $wrap[0].reset();
        }
        else {
            var $inputs = $wrap.find(":input");
            for (var i = 0, len = $inputs.length; i < len; i++) {
                var item = $inputs[i], tagName = getInputTagName(item);
                // 目前只清除 textarea、input[type='text']、input[type='hidden']
                if (tagName === formType.textarea || tagName === formType.text || tagName === formType.hidden) {
                    item.value = "";
                }
            }
        }
    }

    libra.getObjectPropertyValue = function (obj, propertyName, ignoreCase) {
        /// <summary>获取对象对应属性的值</summary>
        /// <param name="obj" type="Object">对象</param>
        /// <param name="propertyName" type="String">属性名称</param>
        /// <param name="ignoreCase" type="bool">是否忽略大小写</param>

        if (string.isInvalid(propertyName)) {
            libra.error("无效的属性名");
        }
        if (ignoreCase === true) {
            propertyName = propertyName.toLowerCase();
            for (var pName in obj) {
                if (pName.toLowerCase() === propertyName) {
                    return obj[pName];
                }
            }
        }
        else {
            return obj[propertyName];
        }
    }

    // 序列化asp.net mvc3 model
    libra.serializeModel = function (obj) {
        var result = { value: "" };
        serializeModelCore(result, "", obj);
        result.value = result.value.slice(0, result.value.length - 1);
        return result.value;
    }
    function serializeModelCore(result, objName, item) {
        // 数组
        if (libra.isArray(item)) {
            for (var i = 0, len = item.length; i < len; i++) {
                var objNameParam = objName + "[" + i + "]";
                serializeModelCore(result, objNameParam, item[i]);
            }
        }
        // 对象
        else if (libra.isObject(item)) {
            for (var propName in item) {
                var objNameParam = "";
                if (objName) {
                    objNameParam = objName + "." + propName;
                }
                else {
                    objNameParam = propName;
                }
                serializeModelCore(result, objNameParam, item[propName]);
            }
        }
        // 值
        else {
            result.value += string.format("{0}={1}&", objName, item);
        }
    }

    var placeholderSupport = ("placeholder" in document.createElement("input"));
    libra.placeholder = function (context) {
        /// <summary>为不支持placeholder的浏览器提供placeholder效果</summary>
        /// <param name="context" type="jQuerySelector">上下文</param>

        // 不支持placeholder的浏览器
        if (!placeholderSupport) {
            var $inputs = $("input[placeholder]", jquerySelector);
            for (var i = 0, len = $inputs.length; i < len; i++) {
                var $this = $($inputs[i]);
                var placeholderString = $this.attr("placeholder");
                var color = $this.css("color");
                var phColor = "#999";
                $this.bind({
                    focus: function () {
                        if (this.value === placeholderString) {
                            this.value = "";
                        }
                        this.style.color = color;
                    },
                    blur: function () {
                        if (this.value === "") {
                            this.value = placeholderString;
                            this.style.color = phColor;
                        }
                        else {
                            this.style.color = color;
                        }
                    }
                }).blur();
            }
        }
    }

    libra.tipFail = alert;

    // 处理ajax
    libra.handleAjaxSettings = function (settings) {
        settings.isLibra = true;
        // 保留用户的success函数
        var successCallback = settings["success"];
        var postData = settings["data"] || {};
        // 在success中处理，jquery.ajax的error函数好像不能写，频繁报错
        settings["success"] = function (model, textStatus, jqXHR, scope) {
            // 处理ajaxform在ie下的问题
            if (postData.isAjaxFormPlugin && libra.browser.ie) {
                try {
                    var tempModel = $.parseJSON(model);
                    if (libra.isObject(tempModel)) {
                        model = tempModel;
                    }
                } catch (e) {
                    // 解析失败
                }
            }
            // 这里处理异常
            if (model.IsException) {
                // 异常发生时处理的方式
                if (model.ExceptionHandleType === 1) {
                    libra.tipFail(model.Message);
                }
            }
            // 不是异常，处理ModelBase
            else {
                // 开启了自动处理Model
                if (model.EnableAutoHandle === true) {
                    // 自动处理的模式
                    switch (model.HandleMode) {
                        case 1:
                            libra.tipFail(model.Message);
                            break;
                        case 2:
                            location.reload();
                            break;
                        case 3:
                            libra.tipFail(model.Message);
                            location.reload();
                            break;
                        case 4:
                            libra.tipFail(model.Message);
                            location.href = model.RedirectUrl;
                            break;
                    }
                }
                // 如果定义了success函数，则调用它，并传入model
                libra.isFunction(successCallback) && successCallback.call(scope, model, textStatus, jqXHR);
            }
        }

        return settings;
    };

    // 重写jQuery.ajax使能处理服务端异常，以及处理ModelBase
    var ajax = jQuery.ajax;
    jQuery.ajax = function (settings) {
        settings = libra.handleAjaxSettings(settings);
        // 调用jquery.ajax函数，把我们已经写好的settings传过去。
        ajax(settings);
    };

    libra.keycode = {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91, // COMMAND
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27, //ESC
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93, // COMMAND_RIGHT
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91 // COMMAND
    };

    // 服务器返回代码
    var returnCode = {};
    returnCode.success = 1;
    returnCode.fail = -1;

    // 常用mine类型
    var mineType = {};
    mineType.json = "application/json";
    mineType.html = "text/html";

    window.string = string;
    window.libra = libra;
    window.returnCode = returnCode;
    window.mineType = mineType;
})(window, jQuery);