<%@ page contentType="text/html; charset=gb2312" language="java" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>登录系统</title>
<s:head/>
</head>
<body>

<table width=780 align="center">
<tr >
	<td >请输入用户名和密码来登录<br />
	<form id="login" method="post" action="login.do">
		用户名:<input type = "text"  name ="username"></br>
		密码:<input type ="password" name ="password"></br>
		验证码:<input type = "text"  name ="kaptcha"></br>
		<img src="captcha.do"></br>
		<input type = "submit" value="login"></br>
	</form>
	</td>

</tr>
</table>
</body>
</html>
