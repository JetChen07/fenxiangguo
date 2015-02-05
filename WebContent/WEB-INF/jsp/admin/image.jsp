<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
    <script src="${pageContext.request.contextPath}/Scripts/common.js?1"></script>
    <script src="${pageContext.request.contextPath}/Scripts/jquery-ui.js"></script>
     
<title>Insert title here</title>
</head>
<body>
<style type="text/css">
        #sortable {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 600px;
        }

            #sortable li {
                border: 1px solid #ccc;
                margin: 20px 20px 3px 0;
                float: left;
                width: 60px;
                height: 60px;
                text-align: center;
            }
    </style>
<div id="mainContent">
    <div id="contentWrap" class="ui-form">
        <legend>头像列表</legend>
        <div class="section">
            <input type="button" class="ui-btn ui-btn-primary" onclick="Add()" value="添加头像" />
            <span id="delete" style="float:right;font-size:24px;width:200px;height:40px;" class="glyphicon glyphicon-trash"></span>
        </div>
        <ul id="sortable">
        	<c:forEach var="item" items="${images}" varStatus="status">
        		<li data-id="${item.id}" class="ui-state-default"><img src="${item.imgUrl}" width="60" height="60" /></li>
        	</c:forEach>
        </ul>
    </div>
</div>
<script type="ssdp-doc" id="dialog">
    <form class="ui-form">
        <div class="ui-form-group">
            <label class="ui-form-label">
               	 头像图片：
            </label>
            <div class="ui-form-ctrls">
                <img src="" alt="" id="showPic" name="picUrl" width="50" height="50">
                <input type="button" id="uploadPhoto" name="imgFile" value="选择图片" class="ui-btn ">
                <label id="spUpload" style="display: none;">
                </label>
                <input type="hidden" id="img" value="" />
            </div>
        </div>
    </form>
</script>
<script type="text/javascript">
    $(function () {
        $("#sortable").sortable({
            connectWith: '#delete',
            stop: function (event, ui) {
                var child = $('#sortable').children();
                var list = [];
                var max = 99;
                child.each(function () {
                    var model = {
                        ID: $(this).attr('data-id').trim(),
                        Image: $(this).find('img').attr('src').trim(),
                        Url: $(this).find('a').attr('href').trim(),
                        SortFlag: max
                    }
                    max--;
                    list.push(model);
                });

                $.ajax({
                    url: '/portrait/ReSort',
                    type: 'post',
                    contentType: 'application/json',
                    data: JSON.stringify(list)
                })
            }
        });
        $("#sortable").disableSelection();

        $("#delete").sortable({
            receive: function (event, ui) {
                var item = ui.item;
                item.hide();
                var id = item.attr('data-id');
                $.ajax({
                    url: '/portrait/delete',
                    type: 'post',
                    data: { id: id },
                    success: function (data) {
                        if (data.Code == 0) {
                            ui.item.remove();
                        } else {
                            location.reload();
                        }
                    }
                })
            }
        });
    });

    function Add() {
        var dialog = new ssdp.dialog();
        dialog.title = '添加头像';
        dialog.content = $('#dialog').html();
        dialog.width = '400px';
        dialog.open();
        ajaxUploads("uploadPhoto", "spUpload", "showPic");
        dialog.yesFn = function () {
            var image = $('#img').val();
            var model = { imagePath: image};
            $.ajax({
                url: 'admin.do?action=uploadImage',
                type: 'post',
                data: model,
                success: function (data) {
                    if (data.Code == 0) {
                        alert('添加成功！');
                        location.reload();
                    } else {
                        alert('添加失败！');
                    }
                }
            });
        }
    }
</script>
</body> 
</html>