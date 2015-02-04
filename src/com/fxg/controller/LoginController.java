package com.fxg.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.fxg.core.Constant;
import com.fxg.domain.Manager;
import com.fxg.service.MgrManager;
import com.fxg.util.CookieTool;
import com.fxg.util.SpringBeanFactory;
import com.fxg.util.StringUtil;
import com.google.code.kaptcha.Constants;

public class LoginController implements Controller{
	private Logger log = Logger.getLogger(AdminController.class);
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		String kaptcha_key = (String) req.getSession().getAttribute(Constants.KAPTCHA_SESSION_KEY);
		String username = (String) req.getParameter("username");
		String password = (String) req.getParameter("password");
		String kaptcha = (String) req.getParameter("kaptcha");
		log.info("username :" + username + "||password :" + password + "||kaptcha :" + kaptcha);
	
		if(StringUtil.isEmpty(username)||StringUtil.isEmpty(password)||StringUtil.isEmpty(kaptcha)){
			resp.sendRedirect(req.getContextPath()+"/login.jsp");
			return null;
		}

		Manager manager = new Manager();
		manager.setName(username);
		manager.setPass(password);
		
		if(MgrManager.getInstance().validLogin(manager) == MgrManager.LOGIN_SUCCESS){
			req.getSession().setAttribute(Constant.USER 
					, manager.getName());
			CookieTool.addCookie(resp,"username",manager.getName(),3600*24*7);
			CookieTool.addCookie(resp,"userpass",manager.getPass(),3600*24*7);
			return new ModelAndView("redirect:/admin.do?action=index");
		};
		resp.sendRedirect(req.getContextPath()+"/login.jsp");
		return null;
	}
	
}
