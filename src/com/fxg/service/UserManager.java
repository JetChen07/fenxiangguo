package com.fxg.service;

import java.util.List;

import com.fxg.dao.ImageDao;
import com.fxg.dao.ManagerDao;
import com.fxg.dao.ShareDao;
import com.fxg.domain.Share;



public class UserManager{
	private ShareDao shareDao;
	
	private static UserManager userManager = null;
	
	public static UserManager getInstance(){
		if(userManager==null){
			userManager = new UserManager();
		}
		return userManager;
	}
	
	UserManager(){
		shareDao = new ShareDao();
	}
	
	public List<Share> getAllShare() {
		// TODO Auto-generated method stub
		return shareDao.findAll();
	}
	
}
