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
		<div class="section">
            <input type="button" class="ui-btn ui-btn-primary" value="添加账户" onclick="Add();" />
        </div>
<div id="mainContent">
    <div id="contentWrap" class="ui-form">
        <table id="goodsTable" class="normaltable normaltable-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>类型</th>
                    <th>账户</th>
                    <th>密码</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="banner">
               <c:forEach var="item" items="${shares}" varStatus="status">	
                    <tr id="${item.id}">
                        <td>
                            ${item.id}
                        </td>
                        <td>
                            ${item.type}
                        </td>
                        <td>
                            ${item.account}
                        </td>
                        <td>
                        	${item.password}            
                        </td>
                        <td>
                            <a class="operateBtn" href="javascript:void(0)" onclick="Edit(${item.id})">修改</a>
                            <a class="operateBtn" href="javascript:void(0)" onclick="Del(${item.id})">删除</a>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
</div>
<script type="ssdp-doc" id="dialog">
    <form class="ui-form">
        <div class="ui-form-group">
            <label class="ui-form-label">type：</label>
            <div class="ui-form-ctrls">
                <input type="text" name="type" id="type" />
            </div>
        </div>
		<div class="ui-form-group">
            <label class="ui-form-label">account：</label>
            <div class="ui-form-ctrls">
                <input type="text" name="account" id="account" />
            </div>
        </div>
		<div class="ui-form-group">
            <label class="ui-form-label">password：</label>
            <div class="ui-form-ctrls">
                <input type="text" name="password" id="password" />
            </div>
        </div>
    </form>
</script>
<script type="text/javascript">


    function Add() {
        var dialog = new ssdp.dialog();
        dialog.title = '添加账户';
        dialog.content = $('#dialog').html();
        dialog.width = '400px';
        dialog.open();
        dialog.yesFn = function () {
            var type = $('#type').val();
            var account = $('#account').val();
            var password = $('#password').val();
            var model = {
                id: 0,
                type: type,
                account: account,
                password:password
            };
            $.ajax({
                url: 'addShare',
                type: 'post',
                data: model,
                success: function (data) {
                    if (data.Code == 0) {
                        alert('添加成功');
                        location.reload();
                    } else {
                        alert('添加失败');
                    }
                }
            });
        }
    }

    function Edit(id) {
        var model = null;
        var $tr = $('#' + id);
        var child = $tr.children();
        var ophtml = child.eq(4).html();
        model = { id: child.eq(0).text().trim(), type: child.eq(1).text().trim(),account:child.eq(2).text().trim(),password:child.eq(3).text().trim()};
        child.eq(1).html('<input type="text" class="ui-input-small" name="type" id="type" value="' + model.type + '"/>');
        child.eq(2).html('<input type="text" class="ui-input-small" name="account" id="account" value="' + model.account + '"/>');
        child.eq(3).html('<input type="text" class="ui-input-small" name="password" id="password" value="' + model.password + '"/>');
        child.eq(4).html('<a class="operateBtn" href="javascript:void(0)" id="save">保存</a>');
        $('#save').bind('click', function () {
            var type = $('#type').val();
            var account = $('#account').val();
            var password = $('#password').val();
            var pd = { id: model.id, type: type, account: account,password:password };
            $.ajax({
                url: 'editShare',
                type: 'post',
                data: pd,
                success: function (data) {
                    if (data.Code == 0) {
                        child.eq(1).html(type);
                        child.eq(2).html(account);
                        child.eq(3).html(password);
                        child.eq(4).html(ophtml);
                    } else {
                        alert('修改失败！');
                    }
                }
            });
        })
    }


    function Del(id) {
        if (confirm('确定删除该关键词?')) {
            $.ajax({
                url: 'delShare',
                type: 'post',
                data: { id: id},
                success: function (data) {
                    if (data.Code == 0) {
                        alert('删除成功！');
                        location.reload();
                    } else {
                        alert('删除失败！');
                    }
                }
            })
        }
    }
</script>
</body>
</html>