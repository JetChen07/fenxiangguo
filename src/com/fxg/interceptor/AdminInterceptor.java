package com.fxg.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.fxg.core.Constant;
import com.fxg.domain.Manager;
import com.fxg.service.MgrManager;
import com.fxg.util.CookieTool;
import com.fxg.util.StringUtil;

public class AdminInterceptor implements HandlerInterceptor{
	private Logger log = Logger.getLogger(AdminInterceptor.class);
//	private String mappingURL;//利用正则映射到需要拦截的路径    
//    public void setMappingURL(String mappingURL) {    
//           this.mappingURL = mappingURL;    
//   }   
	@Override
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2) throws Exception {
		// TODO Auto-generated method stub
		log.info("getinto adminInterceptor");
		String user = (String) request.getSession().getAttribute(Constant.USER);
		if (user != null && !user.equals("")) {
			return true;
		} else {
			Cookie name = CookieTool.getCookieByName(request,"username");
			Cookie pass = CookieTool.getCookieByName(request,"userpass");
			if(name!=null&&pass!=null){
				if(!StringUtil.isEmpty(name.getValue())&&!StringUtil.isEmpty(pass.getValue())){
					Manager manager = new Manager();
					manager.setName(name.getValue());
					manager.setPass(pass.getValue());
					if(MgrManager.getInstance().validLogin(manager)==MgrManager.LOGIN_SUCCESS){
						request.getSession().setAttribute(Constant.USER 
								, manager.getName());
						return true;
					}
					
				}
			}
		}
		response.sendRedirect(request.getContextPath()+"/login.jsp");
		return false;
		
	}

}
