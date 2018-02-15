let CryptoJS = require("crypto-js")
let window = {
    WebSocket: require('ws')
}
let WebSocket = window.WebSocket
function Blob(arr){
    let ret = Buffer.from(arr.join(''), 'utf8')
    ret.size = ret.length
    return ret
}
function FileReader(){
    let buffer = null
    let ret = {
        readAsArrayBuffer(buf){
            buffer = buf
        },
        onload: function(){}
    }
    setTimeout(function(){
        ret.onload({target:{result:buffer}})
    })  
    return ret
}
let document = {
    getElementById(){
        return null
    }
}
let location = {
    reload(){}
}
let navigator = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36",
    appVersion: "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36",
    platform: "Linux x86_64"
}
let $ = function(x){
    return $
}
Object.assign($, {
    text(){return "0123456789 some fake text"},
    click(){return $},
    attr(){return $},
    animate(){return $},
    offset(){return $},
    scroll(){return $},
    getScript(){return $},
    removeClass(){return $},
    addClass(){return $},
    find(){return $},
    eq(){return $},
    hide(){return $}
})
$.ajax = function(options){
    let {url, data} = options
    if(url == "/speed_yidong/htmlwork/postData.php"){
        global_callback(downSpeedArray, upSpeedArray, data)
    }
}
;($.ready = $.load = function(f){
    setTimeout(f, 1);
})
let echarts = {
    init(){return {
        setOption(){}
    }}
}
let Showbo = {
    Msg: {
        alert(msg){
            console.log('[showbo]: ', msg)
            let msg_error = "\u6d4b\u8bd5\u8fde\u63a5\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"
            if(msg in [msg_error]){
                global_callback_error(msg)
            }
        }
    }
}
function GetCookie(){}
let global_callback = function(){throw "global_callback is not defined yet!"}
let global_callback_error = function(){throw "global_callback_error is not defined yet!"}

//  ------ prefix done ------

var websocketTestUrl = "ws://218.207.186.180:9002"
  , tempSize = 10240
  , blobArray = null
  , websocketSupport = !1
  , websocket = null
  , websocketTwo = null
  , websocketThree = null
  , websocketFour = null
  , websocketFive = null
  , websocketSix = null
  , websocketSeven = null
  , websocketEight = null
  , websocketNine = null
  , websocketTen = null
  , openMax = !1
  , time = null
  , downStartTime = null
  , downTime = null
  , downSpeedArray = null
  , downSize = 0
  , downTwoSize = 0
  , downThreeSize = 0
  , downSizeFlag = 0
  , upStartTime = null
  , upTime = null
  , upSpeedArray = null
  , upSize = 0
  , sendDelay = null
  , paragraph = 524288
  , startUpSize = 0
  , startEndSize = 0
  , blobFirst = null
  , blobMin = null
  , blobMax = null
  , blobUp = null
  , blobUpArrays = []
  , progressSizeArray = []
  , testSize = 0
  , s1 = 0
  , s2 = 0
  , preDownSize = 524288
  , testStep = 0
  , sUserAgent = navigator.userAgent
  , fAppVersion = parseFloat(navigator.appVersion)
  , webSocketKey = fAppVersion + "|" + (new Date).getTime() + "|" + Math.random()
  , encryptData = encryptByDES(webSocketKey + "&DATA", "lhwx2016").replace(/\//g, "|").replace(/=/g, "-")
  , encryptMessage = encryptByDES(webSocketKey + "&MESSAGE", "lhwx2016").replace(/\//g, "|").replace(/=/g, "-")
  , outsideFlag = 0
  , testType = 0;
"WebSocket"in window ? websocketSupport = !0 : Showbo.Msg.alert("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6d4b\u8bd5\uff0c\u8bf7\u60a8\u66f4\u6362\u6d4f\u89c8\u5668\uff01");
var bigfileException = !1, downloadStartTime, downloadCurrentTime, downloadCurrentSize, downloadCurrentSpeed, uploadStarTime, uploadCurrentTime, uploadCurrentSize, uploadCurrentSpeed, downloadSpeeds = [], downloadTotal = 0, upSpeeds = [], upTotal = 0, downloadChart, uploadChart, speedTestChart, downloadOption, uploadOption, speedTestOption, categories = [0], downloadValues = [0], uploadValues = [0], axisData, bandWith;
$(document).ready(function() {
    $(".moreces").click(function() {
        if ($("a").attr("disabled"))
            return Showbo.Msg.alert("\u6d4b\u8bd5\u4e2d\u4e0d\u5141\u8bb8\u66f4\u6362\u6d4b\u901f\u70b9\uff01"),
            !1;
        $(".cesubox").removeClass("displaybone")
    });
    $(".server-table span").click(function() {
        var a = $(this).text();
        $(".cesudian").text(a);
        $(".cesubox").addClass("displaybone")
    });
    $(".closebox").click(function() {
        $(".cesubox").addClass("displaybone")
    });
    $("#navsol").offset();
    $(window).scroll(function() {
        580 < $(this).scrollTop() ? ($("#navsol").css({
            position: "fixed",
            top: "0"
        }),
        $("#change1").addClass("displaybone"),
        $("#change2").removeClass("displaybone")) : ($("#navsol").css({
            position: "relative",
            top: "0"
        }),
        $("#change1").removeClass("displaybone"),
        $("#change2").addClass("displaybone"))
    })
});
function compareVersions(a, b) {
    a = a.split(".");
    b = b.split(".");
    if (a.length > b.length)
        for (var d = 0; d < a.length; d++)
            b.push("0");
    else if (a.length < b.length)
        for (d = 0; d < b.length; d++)
            a.push("0");
    for (d = 0; d < a.length; d++) {
        if (a[d] < b[d])
            return -1;
        if (a[d] > b[d])
            return 1
    }
    return 0
}
function checkSystem() {
    var a = "Win32" == navigator.platform || "Windows" == navigator.platform
      , b = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform
      , d = "X11" == navigator.platform && !a && !b
      , e = isWin98 = isWinNT4 = isWin2K = isWinME = isWinXP = isWin2K3 = isVista = !1;
    isMinSunOS4 = isMinSunOS5 = isMinSunOS5_5 = isMacPPC = !1;
    a && (e = -1 < sUserAgent.indexOf("Win95") || -1 < sUserAgent.indexOf("Windows 95"),
    isWin98 = -1 < sUserAgent.indexOf("Win98") || -1 < sUserAgent.indexOf("Windows 98"),
    isWinME = -1 < sUserAgent.indexOf("Win 9x 4.90") || -1 < sUserAgent.indexOf("Windows ME"),
    isWin2K = -1 < sUserAgent.indexOf("Windows NT 5.0") || -1 < sUserAgent.indexOf("Windows 2000"),
    isWinXP = -1 < sUserAgent.indexOf("Windows NT 5.1") || -1 < sUserAgent.indexOf("Windows XP"),
    isWin2K3 = -1 < sUserAgent.indexOf("Windows NT 5.2") || -1 < sUserAgent.indexOf("Windows 2003"),
    isVista = -1 < sUserAgent.indexOf("Windows NT 6.0") || -1 < sUserAgent.indexOf("Windows Vista"),
    isWin7 = -1 < sUserAgent.indexOf("Windows NT 6.1") || -1 < sUserAgent.indexOf("Windows 7"),
    isWin8 = -1 < sUserAgent.indexOf("Windows NT 6.2") || -1 < sUserAgent.indexOf("Windows 8"),
    isWin8x = -1 < sUserAgent.indexOf("Windows NT 6.3") || -1 < sUserAgent.indexOf("Windows 8.1"),
    isWin10 = -1 < sUserAgent.indexOf("Windows NT 10.0") || -1 < sUserAgent.indexOf("Windows NT 6.4") || -1 < sUserAgent.indexOf("Windows 10"),
    isWin2K3 || isVista || (isWinNT4 = -1 < sUserAgent.indexOf("WinNT") || -1 < sUserAgent.indexOf("Windows NT") || -1 < sUserAgent.indexOf("WinNT4.0") || -1 < sUserAgent.indexOf("Windows NT 4.0") && !isWinME && !isWin2K && !isWinXP));
    a ? isWin7 ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 7") : isWin8 ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 8") : isWin8x ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 8.1") : isWin10 ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 10") : isWinXP ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows XP") : isWin2K ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 2000") : isVista ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows Vista") : isWin2K3 ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 2003") : isWinNT4 ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows NT") : e ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 95") : isWin98 ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows 98") : isWinME ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows ME") : $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aWindows") : b ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aMac OS") : d ? $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1aUnix/Linux") : $("#system").text("\u64cd\u4f5c\u7cfb\u7edf\uff1a\u672a\u77e5")
}
checkSystem();
var dynamic_bg = echarts.init(document.getElementById("dynamic_bg"))
  , infoColor = "#00bebe"
  , gaugeRadius = 170
  , barPos = 695
  , barDis = 117
  , barAngle = 32
  , userAddress = "\u672a\u77e5"
  , userBroadband = ""
  , userIp = "";
$(document).ready(function() {
    $("a").click(function() {
        return disabledClick(this)
    });
    $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js", function() {
        remote_ip_info.province != remote_ip_info.city ? userAddress = ("" != remote_ip_info.province ? remote_ip_info.province + "\u7701" : "") + ("" != remote_ip_info.city ? remote_ip_info.city + "\u5e02" : "") : "" != remote_ip_info.city && (userAddress = remote_ip_info.city + "\u5e02")
    });
    $.ajax({
        url: "/speed_yidong/htmlwork/ipAddress.func.php",
        type: "post",
        dataType: "json",
        cache: !1,
        timeout: 1E4,
        success: function(a) {
            userIp = a.ip;
            $(".box_white").eq(0).find("p").eq(1).text("IP\u5730\u5740\uff1a" + a.ip);
            "" != userIp && "183.253.179." == userIp.substr(0, userIp.lastIndexOf(".") + 1) && $(".loadingSpeed").css("display", "none");
            var b = /\u79fb\u52a8/.test(a.operaterAddress)
              , d = /\u94c1\u901a/.test(a.operaterAddress);
            b || d ? $(".box_white").eq(0).find("p").eq(2).text("\u8fd0\u8425\u5546\uff1a" + a.operaterAddress) : $(".box_white").eq(0).find("p").eq(2).text("\u8fd0\u8425\u5546\uff1a\u672a\u77e5")
        }
    });
    $.ajax({
        type: "post",
        url: "/speed_yidong/htmlwork/getTestData.php",
        data: {
            dataType: "kuandaiData"
        },
        dataType: "json",
        cache: !1,
        timeout: 1E4,
        success: function(a) {
            a = a.returnList;
            for (var b = 0; b < a.length; b++) {
                var d = a[b].userip.substr(0, a[b].userip.lastIndexOf(".") + 1) + "*"
                  , e = a[b].speedDownMax
                  , c = a[b].speedUploadMax
                  , f = a[b].speedDownAvg
                  , g = a[b].speedUploadAvg
                  , h = a[b].userAddress
                  , k = a[b].usersystem
                  , l = a[b].browser
                  , m = a[b].testoperator
                  , n = a[b].testdate;
                $(".boxlist").find("dd").eq(b).html("<ul><li> " + (b + 1) + ".</li><li>" + n + '</li><li class="bluew">' + d + "</li><li><span>" + e + "/" + f + "</span>Mbps</li><li><span>" + c + "/" + g + "</span>Mbps</li><li>" + h + '</li><li class="brower">&nbsp;' + k + '</li><li class="brower">&nbsp;&nbsp;' + l + '</li><li class="bluew">' + m + "</li></ul>")
            }
        }
    });
    dynamic_bg_option = {
        series: [{
            name: "\u901f\u5ea6",
            type: "gauge",
            center: ["50%", "45%"],
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: gaugeRadius,
            axisLine: {
                lineStyle: {
                    color: [[.09, "#afffc2"], [.22, "#eefa91"], [.62, "#fdf079"], [1, "#ffe04b"]],
                    width: 20
                }
            },
            axisLabel: {
                formatter: function(a) {
                    return a + "M"
                },
                distance: 25,
                textStyle: {
                    fontWeight: "bolder",
                    color: "#c8eeff",
                    fontSize: 20,
                    fontFamily: "lcd"
                }
            },
            axisTick: {
                show: !0,
                length: 5,
                lineStyle: {
                    color: "#a9dbf5"
                }
            },
            splitLine: {
                length: 5,
                lineStyle: {
                    width: 2,
                    color: "#a9dbf5"
                }
            },
            pointer: {
                width: 10,
                length: "65%"
            },
            title: {
                show: !1
            },
            detail: {
                show: !1
            },
            data: [{
                value: 0,
                name: "\u9650\u65f6\u7f51\u901f"
            }]
        }]
    };
    bar_option = {
        series: [{
            name: "\u901f\u5ea6",
            type: "gauge",
            center: ["50%", "50%"],
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: gaugeRadius,
            axisLine: {
                lineStyle: {
                    color: [[.1, "#ff4500"], [.6, "#1e90ff"], [1, "lime"]],
                    width: 0,
                    shadowColor: "#fff",
                    shadowBlur: 20
                }
            },
            axisLabel: {
                show: !1,
                textStyle: {
                    fontWeight: "bolder",
                    color: "#fff",
                    shadowColor: "#fff",
                    shadowBlur: 10,
                    fontSize: 28
                }
            },
            axisTick: {
                show: !1,
                length: 35,
                lineStyle: {
                    color: "auto",
                    shadowColor: "#fff",
                    shadowBlur: 10
                }
            },
            splitLine: {
                show: !1,
                length: 40,
                lineStyle: {
                    width: 10,
                    color: "auto"
                }
            },
            pointer: {
                width: 0,
                length: "65%"
            },
            title: {
                offsetCenter: [0, "45%"],
                show: !1,
                textStyle: {
                    fontWeight: "bolder",
                    fontSize: 20,
                    color: "#fff",
                    shadowColor: "#fff",
                    shadowBlur: 10
                }
            },
            detail: {
                show: !1,
                backgroundColor: "rgba(30,144,255,0.2)",
                borderWidth: 1,
                borderColor: "#fff",
                width: 180,
                shadowColor: "#fff",
                shadowBlur: 5,
                offsetCenter: [0, "0"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "#ccc",
                    fontSize: 30
                },
                formatter: function(a) {
                    return a + " M/s"
                }
            },
            data: [{
                value: 0,
                name: "\u5b9e\u65f6\u901f\u7387"
            }]
        }]
    };
    dynamic_bg.setOption(dynamic_bg_option, !0);
    $(window).load(function() {
        setTimeout(function() {
            dynamic_bg_option.series[0].data[0].value = 100;
            dynamic_bg.setOption(dynamic_bg_option, !0);
            setTimeout(function() {
                dynamic_bg_option.series[0].data[0].value = 0;
                dynamic_bg.setOption(dynamic_bg_option, !0)
            }, 500)
        }, 800)
    });
    $(".startBtn_1").click(function() {
        init();
        send()
    })
});
function startDl() {
    $(".dynamic_bg").show();
    $(".testingAnimation").removeClass("noDisplay");
    $(".uploadIcon").removeClass("noDisplay");
    $(".downloadIcon").removeClass("noDisplay");
    $(".info_value,.info_title,.info_unit").removeClass("noDisplay");
    $(".xinafter").addClass("displaybone");
    $(".xinbefore").removeClass("displaybone");
    $(".result").addClass("noDisplay");
    $(".testingAnimation").removeClass("noDisplay");
    $(".uploadIcon").removeClass("noDisplay");
    $(".downloadIcon").removeClass("noDisplay");
    $(".downloadIcon,.testingAnimation > div:nth-child(1),.testingAnimation > div:nth-child(2),.testingAnimation > div:nth-child(3)").addClass("doAnimation")
}
function endDl() {
    $(".downloadIcon,.testingAnimation > div:nth-child(1),.testingAnimation > div:nth-child(2),.testingAnimation > div:nth-child(3)").removeClass("doAnimation")
}
function startUl() {
    $(".uploadIcon,.testingAnimation > div:nth-child(3),.testingAnimation > div:nth-child(4),.testingAnimation > div:nth-child(5)").addClass("doAnimation")
}
function endUl() {
    $(".uploadIcon,.testingAnimation > div:nth-child(3),.testingAnimation > div:nth-child(4),.testingAnimation > div:nth-child(5)").removeClass("doAnimation")
}
function showResult() {
    downSpeedArray.sort(function(a, b) {
        return b - a
    });
    var a = parseInt(.05 * downSpeedArray.length);
    downSpeedArray = downSpeedArray.slice(a);
    downSpeedArray.sort();
    downSpeedArray = downSpeedArray.slice(parseInt(a));
    var b = 0;
    $("a").attr("disabled", !1);
    for (var d = 0; d < downSpeedArray.length; d++)
        b += 1 * downSpeedArray[d];
    a = 0 == downSpeedArray.length ? 0 : Math.max.apply(null, downSpeedArray).toFixed(2);
    b = 0 == downSpeedArray.length ? 0 : (b / downSpeedArray.length).toFixed(2);
    upSpeedArray.sort(function(a, b) {
        return b - a
    });
    d = parseInt(.05 * upSpeedArray.length);
    upSpeedArray = upSpeedArray.slice(d);
    upSpeedArray.sort();
    upSpeedArray = upSpeedArray.slice(parseInt(2 * d));
    for (var e = 0, d = 0; d < upSpeedArray.length; d++)
        e += 1 * upSpeedArray[d];
    d = 0 == upSpeedArray.length ? 0 : Math.max.apply(null, upSpeedArray).toFixed(2);
    e = 0 == upSpeedArray.length ? 0 : (e / upSpeedArray.length).toFixed(2);
    $("#result-down-speed-avg").text((8 * b).toFixed(2) + "Mbps");
    $("#result-down-speed-max").text((8 * a).toFixed(2) + "Mbps");
    $("#result-up-speed-avg").text((8 * e).toFixed(2) + "Mbps");
    $("#result-up-speed-max").text((8 * d).toFixed(2) + "Mbps");
    testStep = 0;
    var c = 1024 * a, f, g;
    0 == c || 0 == d ? (Showbo.Msg.alert("\u5f53\u524d\u6d4b\u901f\u94fe\u63a5\u4e2d\u65ad\uff0c\u8bf7\u91cd\u65b0\u6d4b\u8bd5\uff01"),
    f = "walk.png",
    g = "hslowSpeed.png") : 0 < c && 128 > c ? (f = "walk.png",
    g = "hslowSpeed.png") : 128 <= c && 220 > c ? (f = "walk.png",
    g = "hslowSpeed.png") : 220 <= c && 256 > c ? (f = "walk.png",
    g = "slowSpeed.png") : 256 <= c && 540 > c ? (f = "bicycle.png",
    g = "slowSpeed.png") : 540 <= c && 640 > c ? (f = "bicycle.png",
    g = "normalSpeed.png") : 640 <= c && 900 > c ? (f = "bicycle.png",
    g = "normalSpeed.png") : 900 <= c && 1280 > c ? (f = "bicycle.png",
    g = "normalSpeed.png") : 1280 <= c && 2E3 > c ? (f = "car.png",
    g = "fastSpeed.png") : 2E3 <= c && 2560 > c ? (f = "car.png",
    g = "fastSpeed.png") : (f = 2560 <= c && 5E3 > c ? "plane.png" : 5E3 <= c && 6400 > c ? "plane.png" : "rocket.png",
    g = "hfastSpeed.png");
    var h = 0
      , h = 640 >= c ? 30 * c / 640 : 1280 >= c ? 30 * (c - 640) / 640 + 30 : 2560 >= c ? 25 * (c - 1280) / 1280 + 60 : 6400 >= c ? 10 * (c - 2560) / 3840 + 85 : 1 < c / 12800 ? 100 : 5 * (c - 6400) / 6400 + 95;
    $(".gxa").find("img").eq(0).attr("src", "/speed_yidong/templets/default/images/" + f);
    $(".gxa").find("img").eq(1).attr("src", "/speed_yidong/templets/default/images/" + g);
    $(".gxn").find("span").text(100 == parseInt(h) ? 99.99 : parseInt(h) + "%");
    $(".dynamic_bg").hide();
    $(".testingAnimation").addClass("noDisplay");
    $(".uploadIcon").addClass("noDisplay");
    $(".downloadIcon").addClass("noDisplay");
    $(".info_value,.info_title,.info_unit").addClass("noDisplay");
    $(".result").removeClass("noDisplay");
    $(".xinafter").removeClass("displaybone");
    $(".xinbefore").addClass("displaybone");
    $(".startBtn_1").text("\u91cd\u65b0\u6d4b\u8bd5");
    $(".startBtn_1,.file50M").animate({
        opacity: 1
    });
    postData(b, a, e, d)
}
function postData(a, b, d, e) {
    var c = {};
    c.avgDownSpeed = (8 * a).toFixed(2);
    c.maxDownSpeed = (8 * b).toFixed(2);
    c.avgUpSpeed = (8 * d).toFixed(2);
    c.maxUpSpeed = (8 * e).toFixed(2);
    c.browser = myBrowser();
    c.userBroadband = null != GetCookie("DedeUserName") ? GetCookie("DedeUserName") : userBroadband;
    c.userip = $(".box_white").eq(0).find("p").eq(1).text().substring(5);
    c.useroperator = $(".box_white").eq(0).find("p").eq(2).text().substring(4);
    c.usersystem = $(".box_white").eq(0).find("p").eq(3).text().substring(5);
    c.testoperator = $(".box_white").eq(1).find("p").eq(1).text().substring(6);
    c.testip = $(".box_white").eq(1).find("p").eq(2).text().substring(6);
    c.testaddr = $(".box_white").eq(1).find("p").eq(3).text().substring(3);
    c.testItem = "kuandai";
    c.userAddress = userAddress;
    c.outsideFlag = outsideFlag;
    c.testType = testType;
    console.log(c);
    $.ajax({
        url: "/speed_yidong/htmlwork/postData.php",
        data: c,
        type: "post",
        cache: !1,
        timeout: 2E4
    })
}
function init() {
    webSocketKey = fAppVersion + "|" + (new Date).getTime() + "|" + Math.random();
    encryptData = encryptByDES(webSocketKey + "&DATA", "lhwx2016").replace(/\//g, "|").replace(/=/g, "-");
    encryptMessage = encryptByDES(webSocketKey + "&MESSAGE", "lhwx2016").replace(/\//g, "|").replace(/=/g, "-");
    uploadCurrentSpeed = uploadCurrentSize = uploadCurrentTime = uploadStarTime = downloadCurrentSpeed = downloadCurrentSize = downloadCurrentTime = downloadStartTime = 0;
    downloadSpeeds = [];
    downloadTotal = 0;
    upSpeeds = [];
    upTotal = 0;
    bigfileException = !1;
    progressSizeArray = [];
    testSize = 0;
    websocketTen = websocketNine = websocketEight = websocketSeven = websocketSix = websocketFive = websocketFour = websocketThree = websocketTwo = websocket = null
}
function updateSpeedMain(a) {
    a = parseFloat(8 * a).toFixed(2) - 0;
    if (100 >= a || 100 >= dynamic_bg_option.series[0].data[0].value)
        dynamic_bg_option.series[0].data[0].value = a,
        dynamic_bg.setOption(dynamic_bg_option);
    $(".info_value").text(a)
}
function selectTest(a) {
    1 == a ? (websocketTestUrl = "ws://218.207.214.38:5203",
    $(".box_white").eq(1).find("p").eq(1).text("\u5f53\u524d\u6d4b\u901f\u70b9\uff1a\u798f\u5efa\u798f\u5dde\u5e02\u6d4b\u901f\u70b9"),
    $(".box_white").eq(1).find("p").eq(2).text("\u6d4b\u901f\u70b9IP\uff1a218.207.214.*"),
    $(".box_white").eq(1).find("p").eq(3).text("\u4f4d\u7f6e\uff1a\u798f\u5efa\u7701\u798f\u5dde\u5e02\u79fb\u52a8")) : 2 == a ? (websocketTestUrl = "ws://218.207.179.241:9135",
    $(".box_white").eq(1).find("p").eq(1).text("\u5f53\u524d\u6d4b\u901f\u70b9\uff1a\u798f\u5efa\u9f99\u5ca9\u5e02\u6d4b\u901f\u70b9"),
    $(".box_white").eq(1).find("p").eq(2).text("\u6d4b\u901f\u70b9IP\uff1a218.207.179.*"),
    $(".box_white").eq(1).find("p").eq(3).text("\u4f4d\u7f6e\uff1a\u798f\u5efa\u7701\u9f99\u5ca9\u5e02\u79fb\u52a8")) : 3 == a ? (websocketTestUrl = "ws://218.207.186.180:9002",
    $(".box_white").eq(1).find("p").eq(1).text("\u5f53\u524d\u6d4b\u901f\u70b9\uff1a\u798f\u5efa\u6cc9\u5dde\u5e02\u6d4b\u901f\u70b9"),
    $(".box_white").eq(1).find("p").eq(2).text("\u6d4b\u901f\u70b9IP\uff1a218.207.186.*"),
    $(".box_white").eq(1).find("p").eq(3).text("\u4f4d\u7f6e\uff1a\u798f\u5efa\u7701\u6cc9\u5dde\u5e02\u79fb\u52a8")) : 4 == a && (websocketTestUrl = "ws://211.143.214.3:9002",
    $(".box_white").eq(1).find("p").eq(1).text("\u5f53\u524d\u6d4b\u901f\u70b9\uff1a\u798f\u5efa\u5357\u5e73\u5e02\u6d4b\u901f\u70b9"),
    $(".box_white").eq(1).find("p").eq(2).text("\u6d4b\u901f\u70b9IP\uff1a211.143.214.*"),
    $(".box_white").eq(1).find("p").eq(3).text("\u4f4d\u7f6e\uff1a\u798f\u5efa\u7701\u5357\u5e73\u5e02\u79fb\u52a8"))
}
function send() {
    openWebSockets() || websocketSupport && Showbo.Msg.alert("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01")
}
function open() {
    console.log("\u8fde\u63a5\u6210\u529f\uff01")
}
function error() {
    Showbo.Msg.alert("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u5237\u65b0\u9875\u9762\uff0c\u518d\u8fdb\u884c\u6d4b\u8bd5\uff01");
    console.log("\u8fde\u63a5\u53d1\u751f\u9519\u8bef")
}
function close() {
    console.log("\u8fde\u63a5\u5173\u95ed\uff01")
}
function message(a) {
    console.log('[debug][message]: ', a.data)
    if ("CONTROL:[CONNECTED];" == a.data)
        websocket.send("CONTROL:[PREDOWN] | SIZE:[" + preDownSize + "];"),
        setTimeout(function() {
            if (0 == testStep) {
                try {
                    websocket.close(),
                    websocketTwo.close()
                } catch (f) {}
                Showbo.Msg.alert("\u7b49\u5f85\u8d85\u65f6,\u8bf7\u91cd\u65b0\u5237\u65b0\u6d4b\u8bd5!");
                setTimeout(function() {
                    location.reload()
                }, 3E3)
            }
        }, 15E3);
    else if ("CONTROL:[YES];" == a.data)
        if (0 == testStep)
            downInit(),
            websocketTwo = new WebSocket(websocketTestUrl,encryptData),
            websocketTwo.onmessage = messageTwo,
            console.log("websocketTestUrl:" + encryptData);
        else if (1 == testStep)
            console.log("websocketTestUrl:" + encryptData),
            websocketThree = new WebSocket(websocketTestUrl,encryptData),
            websocketThree.onmessage = messageTwo,
            websocketFour = new WebSocket(websocketTestUrl,encryptData),
            websocketFour.onmessage = messageTwo,
            websocketFive = new WebSocket(websocketTestUrl,encryptData),
            websocketFive.onmessage = messageTwo,
            openMax && (websocketSix = new WebSocket(websocketTestUrl,encryptData),
            websocketSix.onmessage = messageTwo,
            websocketSeven = new WebSocket(websocketTestUrl,encryptData),
            websocketSeven.onmessage = messageTwo,
            websocketEight = new WebSocket(websocketTestUrl,encryptData),
            websocketEight.onmessage = messageTwo,
            websocketNine = new WebSocket(websocketTestUrl,encryptData),
            websocketNine.onmessage = messageTwo,
            websocketTen = new WebSocket(websocketTestUrl,encryptData),
            websocketTen.onmessage = messageTwo);
        else {
            if (2 == testStep) {
                var b;
                setTimeout(function() {
                    try {
                        clearInterval(b),
                        b = null,
                        websocket.close(),
                        websocketTwo.close(),
                        websocketThree.close(),
                        websocketFour.close(),
                        websocketFive.close(),
                        openMax && (websocketSix.close(),
                        websocketSeven.close(),
                        websocketEight.close(),
                        websocketNine.close(),
                        websocketTen.close())
                    } catch (f) {}
                    testStep = 3;
                    endUl();
                    showResult()
                }, 15E3);
                a = new FileReader;
                a.readAsArrayBuffer(blobMax);
                a.onload = function(a) {
                    var c = a.target.result;
                    console.log('[debug][send]: ', c)
                    b = setInterval(function() {
                        try {
                        0 == websocketTwo.bufferedAmount && websocketTwo.send(c);
                        0 == websocketThree.bufferedAmount && websocketThree.send(c);
                        0 == websocketFour.bufferedAmount && websocketFour.send(c);
                        0 == websocketFive.bufferedAmount && websocketFive.send(c);
                        openMax && (0 == websocketSix.bufferedAmount && websocketSix.send(c),
                        0 == websocketSeven.bufferedAmount && websocketSeven.send(c),
                        0 == websocketEight.bufferedAmount && websocketEight.send(c),
                        0 == websocketNine.bufferedAmount && websocketNine.send(c),
                        0 == websocketTen.bufferedAmount && websocketTen.send(c))
                        } catch(e){if(false)console.log(e.message)}
                    }, 5)
                }
            }
        }
    else if ("CONTROL:[NO];" == a.data) {
        try {
            0 == testStep ? websocket.close() : 1 == testStep ? (websocket.close(),
            websocketTwo.close()) : 2 == testStep && (websocket.close(),
            websocketTwo.close(),
            websocketThree.close(),
            websocketFour.close(),
            websocketFive.close(),
            openMax && (websocketSix.close(),
            websocketSeven.close(),
            websocketEight.close(),
            websocketNine.close(),
            websocketTen.close()))
        } catch (f) {}
        endDl();
        endUl();
        $("a").attr("disabled", !1);
        $(".testingAnimation").addClass("noDisplay");
        $(".uploadIcon").addClass("noDisplay");
        $(".downloadIcon").addClass("noDisplay");
        $(".info_value,.info_title,.info_unit").addClass("noDisplay");
        Showbo.Msg.alert("\u6d4b\u901f\u70b9\u7e41\u5fd9\u6216\u5f02\u5e38\uff0c\u8bf7\u60a8\u7a0d\u540e\u5728\u6d4b\u8bd5\uff01")
    } else if ("CONTROL:[START];" == a.data) {
        if (downTime = new Date,
        1 == testStep)
            var d = 0
              , e = 0
              , c = setInterval(function() {
                e = downSize;
                var a = .4 * (1 < testSize ? 3 : testSize + 1)
                  , b = 1024 * tempSize * (e - d) / 1024 / 1024;
                progressSizeArray.push(b);
                a = ((b + (1 < testSize ? progressSizeArray[testSize - 1] + progressSizeArray[testSize - 2] : 0 < testSize ? progressSizeArray[testSize - 1] : 0)) / a).toFixed(2);
                d = e;
                0 < a && (updateSpeedMain(a),
                downSpeedArray.push(a));
                testSize++;
                if (15 <= (new Date - downTime) / 1E3) {
                    websocket.send("CONTROL:[STOP];");
                    testStep = 2;
                    endDl();
                    updateSpeedMain(0);
                    for (a = 0; 4096 > a; a++)
                        blobArray.push((new Date).getTime() + a + "qwertyuiopasdfghjklkjhgfdsertyuiopoiuytredfghjkilokijuhygtfrdeswqwertyuiopasdfghjklkjhgfdsertyuiopoiuytredfghjkilokijuhygtfrdeswqwertyuiopasdfghjklkjhgfdsertyuiopoiuytredfghjkilokijuhygtfrdeswqwertyuiopasdfghjklkjhgfdsertyuiopoiuytredfghjkilokijuhygtfrdesw");
                    blobMax = new Blob(blobArray,{
                        type: "text/plain"
                    });
                    websocket.send("CONTROL:[UP] | SIZE:[" + blobMax.size + "];");
                    startUl();
                    clearInterval(c);
                    c = null
                }
            }, 400)
    } else
        0 <= a.data.indexOf("CONTROL:[RESULT]") && (upSize++,
        a = a.data,
        a = a.substring(a.lastIndexOf("[") + 1, a.lastIndexOf("]")),
        2 == testStep && (a = (a / 1024 / 1024).toFixed(2),
        0 < a && (updateSpeedMain(a),
        upSpeedArray.push(a))))
}
function messageTwo(a) {
    if (a.data.constructor == String && a.data.length == preDownSize && 0 == testStep) {
        var b = parseInt((preDownSize / 1024 / ((new Date - downTime) / 1E3) / 100).toFixed(0));
        openMax = "" != userIp && "183.253.179." == userIp.substr(0, userIp.lastIndexOf(".") + 1) ? !0 : !1;
        tempSize = 0 < parseInt(b / 10) ? 10 * parseInt(b / 10) : 10;
        websocket.send("CONTROL:[STOP];");
        testStep = 1;
        websocket.send("CONTROL:[DOWN] | SIZE:[" + 1024 * tempSize + "];")
    } else
        a.data.constructor == String && a.data.length == 1024 * tempSize && 1 == testStep && downSize++;
    a.data = null
}
function openWebSockets() {
    if ("WebSocket"in window) {
        console.log("\u5f00\u59cb\u8fde\u63a5");
        try {
            websocket = new WebSocket(websocketTestUrl,encryptMessage),
            websocket.binaryType = "blob",
            websocket.onopen = open,
            websocket.onerror = error,
            websocket.onclose = close,
            websocket.onmessage = message
        } catch (a) {
            return Showbo.Msg.alert("\u6d4b\u8bd5\u8fde\u63a5\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"),
            !1
        }
        return !0
    }
    Showbo.Msg.alert("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6d4b\u8bd5\uff0c\u8bf7\u60a8\u66f4\u6362\u6d4f\u89c8\u5668\uff01");
    return !1
}
function downInit() {
    blobArray = [];
    downSpeedArray = [];
    upSpeedArray = [];
    downStartTime = new Date;
    downTime = new Date;
    upSize = downSize = 0;
    $("a").attr("disabled", !0);
    $(".startBtn_1,.file50M").animate({
        opacity: 0
    }, 500, function() {
        dynamic_bg_option.series[0].data[0].value = 0;
        dynamic_bg.setOption(dynamic_bg_option);
        $(".info_value").text("0.00");
        startDl()
    })
}
function closeTimer(a) {
    clearInterval(a)
}
function myBrowser() {
    var a = ""
      , b = navigator.userAgent
      , d = -1 < b.indexOf("Opera")
      , d = -1 < b.indexOf("compatible") && -1 < b.indexOf("MSIE") && !d
      , e = -1 < b.toLowerCase().indexOf("edge") && !d
      , c = -1 < b.toLowerCase().indexOf("trident") && -1 < b.indexOf("rv");
    /[Ff]irefox(\/\d+\.\d+)/.test(b) ? (tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(b),
    a += tempArray[1]) : d ? (/MSIE (\d+\.\d+);/.test(b),
    b = parseFloat(RegExp.$1),
    a += 7 == b ? "IE7" : 8 == b ? "IE8" : 9 == b ? "IE9" : 10 == b ? "IE10" : "0") : e ? a += "Edge" : c ? a += "IE11" : /[Cc]hrome\/\d+/.test(b) ? (tempArray = /([Cc]hrome)\/(\d+)/.exec(b),
    a += tempArray[1]) : /[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(b) ? (tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(b),
    a += tempArray[3]) : /[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(b) ? (tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(b),
    a += tempArray[1]) : a += "unknown";
    return a
}
function disabledClick(a) {
    return $(a).hasClass("historyTest") && null == GetCookie("DedeUserName") ? ($(".historyTest").attr("disabled", "true"),
    Showbo.Msg.alert("\u8bf7\u5148\u767b\u5f55\uff0c\u624d\u80fd\u67e5\u770b\u6d4b\u8bd5\u8bb0\u5f55\uff01"),
    !1) : $(a).attr("disabled") ? (Showbo.Msg.alert("\u6d4b\u8bd5\u4e2d\u4e0d\u5141\u8bb8\u8df3\u8f6c\uff0c\u8bf7\u7b49\u5f85\u6d4b\u8bd5\u5b8c\u6210\uff01"),
    !1) : !0
}
function encryptByDES(a, b) {
    b = CryptoJS.enc.Utf8.parse(b);
    return CryptoJS.DES.encrypt(a, b, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}
;


//  ------ suffix begin ------

module.exports = {
    start(site_index, cb) {
        global_callback = function(downSpeedArray, upSpeedArray, post_data){
            cb(null, downSpeedArray, upSpeedArray, post_data)
        }
        global_callback_error = function(err){
            cb(err)
        }
        init()
        if(site_index){
            if(typeof site_index == 'number'){
                selectTest(site_index)
            } else if(typeof site_index == 'string'){
                websocketTestUrl = site_index
            }
        }
        send()
    }
}