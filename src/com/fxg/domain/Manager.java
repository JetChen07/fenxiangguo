package com.fxg.domain;

import java.io.Serializable;
import java.util.*;

/**
 * Description:
 * <br/>��վ: <a href="http://www.crazyit.org">���Java����</a> 
 * <br/>Copyright (C), 2001-2012, Yeeku.H.Lee
 * <br/>This program is protected by copyright laws.
 * <br/>Program Name:
 * <br/>Date:
 * @author  Yeeku.H.Lee kongyeeku@163.com
 * @version  1.0
 */
public class Manager implements Serializable
{
	private static final long serialVersionUID = 48L;
	// �þ������Ĳ���
	private Integer id;
	// Ա������
	private String name;

	// Ա������
	private String pass;

	// �޲���Ĺ�����
	public Manager() {
	}

	// ��ʼ��ȫ�����ԵĹ�����
	public Manager(Integer id, String name, String pass) {
		this.id = id;
		this.name = name;
		this.pass = pass;

	}

	// id���Ե�setter��getter����
	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return this.id;
	}

	// name���Ե�setter��getter����
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	// pass���Ե�setter��getter����
	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getPass() {
		return this.pass;
	}

	// ��дequals()������ֻҪname��pass��ͬ��Ա������Ϊ��ȡ�
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj != null && obj.getClass() == Manager.class) {
			Manager employee = (Manager) obj;
			return this.getName().equals(employee.getName())
					&& this.getPass().equals(employee.getPass());
		}
		return false;
	}

	// ���Ա����name��pass������hashCodeֵ
	public int hashCode() {
		return name.hashCode() + pass.hashCode() * 17;
	}

}