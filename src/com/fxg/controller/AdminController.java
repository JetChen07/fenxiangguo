package com.fxg.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.fxg.domain.Image;
import com.fxg.domain.Share;
import com.fxg.interceptor.AdminInterceptor;
import com.fxg.service.MgrManager;

public class AdminController extends MultiActionController{
	 private Logger log = Logger.getLogger(AdminController.class);
	 public ModelAndView index(HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		ModelAndView mv = new ModelAndView();
			//添加模型数据 可以是任意的POJO对象
		mv.addObject("message", "Hello World hhaa in AdminController!");
			//设置逻辑视图名，视图解析器会根据该名字解析到具体的视图页面
		mv.setViewName("admin/index");
        return mv;
	 }
	 
	 
	 public ModelAndView getShareView(HttpServletRequest request,
				HttpServletResponse response) throws Exception{
		 ModelAndView mv = new ModelAndView();
			//添加模型数据 可以是任意的POJO对象
		mv.addObject("message", "Hello World hhaa in AdminController!");
		List<Share> shares = MgrManager.getInstance().getAllShare();
			//设置逻辑视图名，视图解析器会根据该名字解析到具体的视图页面
		mv.addObject("shares", shares);
		mv.setViewName("admin/account");
		return mv;
	 }
	 
	 public ModelAndView getAllImage(HttpServletRequest request,
				HttpServletResponse response) throws Exception{
		 ModelAndView mv = new ModelAndView();
			//添加模型数据 可以是任意的POJO对象
		mv.addObject("message", "Hello World hhaa in AdminController!");
		List<Image> images = MgrManager.getInstance().getAllImage();
			//设置逻辑视图名，视图解析器会根据该名字解析到具体的视图页面
		mv.addObject("images", images);
		mv.setViewName("admin/image");
		return mv;
	 }
}
