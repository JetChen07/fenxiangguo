package com.fxg.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.fxg.interceptor.AdminInterceptor;

public class AdminController extends MultiActionController{
	 private Logger log = Logger.getLogger(AdminController.class);
	 public ModelAndView index(HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		ModelAndView mv = new ModelAndView();
			//添加模型数据 可以是任意的POJO对象
		mv.addObject("message", "Hello World hhaa in AdminController!");
			//设置逻辑视图名，视图解析器会根据该名字解析到具体的视图页面
		mv.setViewName("hello");
        return mv;
	 }
	
	 public ModelAndView login(HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		ModelAndView mv = new ModelAndView();
			//添加模型数据 可以是任意的POJO对象
		mv.addObject("message", "Hello World hhaa in AdminController!");
			//设置逻辑视图名，视图解析器会根据该名字解析到具体的视图页面
		mv.setViewName("hello");
        return mv;
	 }
}
