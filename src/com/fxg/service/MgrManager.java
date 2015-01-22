package com.fxg.service;

import java.util.List;

import com.fxg.dao.ImageDao;
import com.fxg.dao.ManagerDao;
import com.fxg.dao.ShareDao;
import com.fxg.domain.Image;
import com.fxg.domain.Manager;
import com.fxg.domain.Share;
import com.fxg.util.SpringBeanFactory;


public class MgrManager{
	private ManagerDao managerDao;
	public ManagerDao getManagerDao() {
		return managerDao;
	}

	public void setManagerDao(ManagerDao managerDao) {
		this.managerDao = managerDao;
	}

	private ShareDao shareDao;
	public ShareDao getShareDao() {
		return shareDao;
	}

	public void setShareDao(ShareDao shareDao) {
		this.shareDao = shareDao;
	}

	private ImageDao imageDao;
	public ImageDao getImageDao() {
		return imageDao;
	}

	public void setImageDao(ImageDao imageDao) {
		this.imageDao = imageDao;
	}

	//登录失败
	public static final int LOGIN_FAIL = 0;
	//登录成功
	public static final int LOGIN_SUCCESS = 1;
	
	private static MgrManager mgrManager = null;
	
	public static MgrManager getInstance(){
		if(mgrManager==null){
			mgrManager = new MgrManager();
			mgrManager.managerDao = SpringBeanFactory.getBean("managerDao",ManagerDao.class);
			mgrManager.shareDao = SpringBeanFactory.getBean("shareDao",ShareDao.class);
			mgrManager.imageDao = SpringBeanFactory.getBean("imageDao",ImageDao.class);
		}
		return mgrManager;
	}
	
	public MgrManager(){
/*		managerDao = SpringBeanFactory.getBean("managerDao",ManagerDao.class);
		shareDao = SpringBeanFactory.getBean("shareDao",ShareDao.class);
		imageDao = SpringBeanFactory.getBean("imageDao",ImageDao.class);*/
	}

	public int validLogin(Manager mgr) {
		// TODO Auto-generated method stub
		// ����ҵ�һ�����?�Ծ����¼
		List<Manager> vl = managerDao.findByNameAndPass(mgr);
		if (vl!=null&&vl.size() >= 1) {
			return LOGIN_SUCCESS;
		} else {
			return LOGIN_FAIL;
		}
	}
	

	public List<Share> getAllShare() {
		// TODO Auto-generated method stub
		return shareDao.findAll();
	}

	public void deleteShare(int id) {
		// TODO Auto-generated method stub
		shareDao.delete(id);
	}


	public void addShare(Share share) {
		// TODO Auto-generated method stub
		shareDao.save(share);
	}
	
	public void updateShare(Share share){
		shareDao.update(share);
	}

	public void addImage(Image image) {
		// TODO Auto-generated method stub
		imageDao.save(image);
	}

	public List<Image> getAllImage() {
		// TODO Auto-generated method stub
		return imageDao.findAll();
	}
}
