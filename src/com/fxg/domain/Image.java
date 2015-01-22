package com.fxg.domain;

import java.io.Serializable;

public class Image implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String imgUrl;
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	
	public boolean equals(Object obj) {
		if (obj != null && obj.getClass() == Image.class) {
			Image image = (Image) obj;
			return this.getImgUrl().equals(image.getImgUrl());
		}
		return false;
	}

	public int hashCode() {
		return imgUrl.hashCode();
	}
}
