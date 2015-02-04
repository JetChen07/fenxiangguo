<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" href="/favicon.png" type="image/x-icon">
    <link href="${pageContext.request.contextPath}/Css/index.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Css/style.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Css/wxcloud.min.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Scripts/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Scripts/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Css/jiuguo.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Css/goodsCatg.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/Css/ssdp.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/Scripts/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/Scripts/bootstrap/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/Scripts/libra-2.0.js"></script>
    <script src="${pageContext.request.contextPath}/Scripts/ssdp-widget2.js"></script>
    <script src="${pageContext.request.contextPath}/Scripts/ajaxupload.js"></script>
    <script src="${pageContext.request.contextPath}/Scripts/common.js"></script>
    <script src="${pageContext.request.contextPath}/Scripts/jquery-ui.js"></script>
  
</head>
<div class="header">
    <h1 style="color:white;font-family:'Microsoft YaHei';">玖果视频后台管理</h1>
</div>
<div class="main">
    <div class="main-left">
        <ul class="nav nav-pills nav-stacked" role="tablist">
            <li class="active"><a href="javascript:void(0)" data-url="/fenxiangguo/admin/right.jp">状态总览</a></li>
            <li><a href="javascript:void(0)" data-url="/fenxiangguo/admin.do?action=getShareView">账户管理</a></li>
            <li><a href="javascript:void(0)" data-url="/fenxiangguo/admin.do?action=getAllImage">图片管理</a></li>
        </ul>
    </div>
    <div class="main-right">
        <iframe style="width:100%;height:820px;" id="main-wrap" src="/fenxiangguo/admin/right.jp"></iframe>
    </div>
</div>
<div class="footer">
    <a style=" font-style:italic;text-decoration:none">"For The Dream"</a>| © Copyright  2014 JiuGuo Network Technology<a style="text-decoration:none; opacity:.4">|浙ICP备14025058号-1</a>
</div>
  <script type="text/javascript">
	    $('.nav').children('li').bind('click', function () {
	        $('.nav').children('li').removeClass('active');
	        $(this).addClass('active');
	        var url = $(this).find('a').attr('data-url');
	        $('#main-wrap').attr('src', url);
	    })
	</script>
</html>