package com.fxg.domain;

import java.io.Serializable;

public class Share implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private String password;
	private String type;
	private String account;
	
	public Share(){
		
	}
	public Share(Integer id, String account, String password,String type){
		this.id =id;
		this.account =account;
		this.password = password;
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}

	public boolean equals(Object obj) {

		return false;
	}

	// ���Ա����name��pass������hashCodeֵ
	public int hashCode() {
		return account.hashCode() + password.hashCode() * 17;
	}
}
