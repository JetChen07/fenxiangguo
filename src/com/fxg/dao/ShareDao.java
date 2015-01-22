package com.fxg.dao;

import java.util.List;

import com.fxg.common.hibernate.support.GuoHibernateDaoSupport;
import com.fxg.domain.Share;

public class ShareDao extends GuoHibernateDaoSupport{


	public Share get(Integer id) {
		// TODO Auto-generated method stub
		return getHibernateTemplate()
				.get(Share.class , id);
	}


	public Integer save(Share share) {
		// TODO Auto-generated method stub
		return (Integer)getHibernateTemplate()
				.save(share);
	}


	public void update(Share share) {
		// TODO Auto-generated method stub
		getHibernateTemplate().update(share);
	}


	public void delete(Share share) {
		// TODO Auto-generated method stub
		getHibernateTemplate().delete(share);
	}


	public void delete(Integer id) {
		// TODO Auto-generated method stub
		getHibernateTemplate().delete(get(id));
	}

	public List<Share> findAll() {
		// TODO Auto-generated method stub
		return (List<Share>)getHibernateTemplate()
				.find("from Share");
	}

}
