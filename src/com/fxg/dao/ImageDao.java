package com.fxg.dao;

import java.util.List;
import com.fxg.common.hibernate.support.GuoHibernateDaoSupport;
import com.fxg.domain.Image;

public class ImageDao extends GuoHibernateDaoSupport {

	public Image get(Integer id) {
		// TODO Auto-generated method stub
		return this.getHibernateTemplate().get(Image.class, id);
	}

	public Integer save(Image image) {
		// TODO Auto-generated method stub
		return (Integer) this.getHibernateTemplate().save(image);
	}

	public void update(Image image) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().update(image);
	}

	public void delete(Image image) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(image);
	}

	public void delete(Integer id) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(get(id));
	}

	public List<Image> findAll() {
		// TODO Auto-generated method stub
		return getHibernateTemplate().find("from Image");
	}

}
