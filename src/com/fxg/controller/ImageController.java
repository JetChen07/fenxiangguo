package com.fxg.controller;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.fxg.core.Constant;
import com.fxg.util.ResultUtils;


public class ImageController extends MultiActionController{

	 
	public void fileUpload(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		System.out.println("I am upload file");
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		// 获得第1张图片（根据前台的name名称得到上传的文件）
		MultipartFile mFile = multipartRequest.getFile("file");
		if (mFile != null) {
			String fileName = UUID.randomUUID() + ".png";
			String path = "C:////xampp//htdocs//image//" + fileName;
			File localFile = new File(path);
			mFile.transferTo(localFile);
			request.setAttribute("fileUrl", path);
			HashMap <String,Object> result = new HashMap<String,Object>();
			result.put("Code", 0);
			String message = Constant.ImagePath +fileName;
			result.put("Message", message);
			System.out.print(message);
			ResultUtils.toJson(response, result);
		}else{
			HashMap <String,Object> result = new HashMap<String,Object>();
			result.put("Code", 1);
			ResultUtils.toJson(response, result);
		}

	}
}
