package com.fxg.util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

public class ResultUtils {
	public static void toJson(HttpServletResponse response, Object data)
			throws IOException {
		String jsonText = JSON.toJSONString(data);
		response.setContentType("text/json; charset=utf-8");
		response.setHeader("Cache-Control", "no-cache"); //
		PrintWriter out = response.getWriter();
		out.print(jsonText);
		out.flush();
		out.close();
	}
}
