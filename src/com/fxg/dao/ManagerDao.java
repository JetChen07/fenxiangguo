package com.fxg.dao;

import java.util.List;
import com.fxg.domain.Manager;
import com.fxg.common.hibernate.support.GuoHibernateDaoSupport;

public class ManagerDao extends GuoHibernateDaoSupport{


	public Manager get(Integer id) {
		// TODO Auto-generated method stub
		return getHibernateTemplate()
				.get(Manager.class , id);
	}


	public Integer save(Manager manager) {
		// TODO Auto-generated method stub
		return (Integer)getHibernateTemplate()
				.save(manager);
	}


	public void update(Manager manager) {
		// TODO Auto-generated method stub
		getHibernateTemplate().update(manager);
	}


	public void delete(Manager manager) {
		// TODO Auto-generated method stub
		getHibernateTemplate().delete(manager);
	}


	public void delete(Integer id) {
		// TODO Auto-generated method stub
		getHibernateTemplate().delete(get(id));
	}


	public List<Manager> findAll() {
		// TODO Auto-generated method stub
		return (List<Manager>)getHibernateTemplate()
				.find("from Manager");
	}


	public List<Manager> findByNameAndPass(Manager mgr) {
		// TODO Auto-generated method stub
		return (List<Manager>)getHibernateTemplate()
		.find("from Manager p where p.name = ? and p.pass=?"
		, mgr.getName() , mgr.getPass()); 
	}

	public Manager findByName(String name) {
		// TODO Auto-generated method stub
		List<Manager> emps = (List<Manager>)getHibernateTemplate()
				.find("from Manager where name = ? " , name);
			if (emps!= null && emps.size() >= 1)
			{
				return emps.get(0);
			}
			return null;
	}

}
