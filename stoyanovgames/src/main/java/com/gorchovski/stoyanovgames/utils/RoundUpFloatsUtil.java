package com.gorchovski.stoyanovgames.utils;

import java.math.BigDecimal;

public class RoundUpFloatsUtil {
	
	public static float round(float number, int decimalPlace) {
		BigDecimal bd = new BigDecimal(number);
		bd = bd.setScale(decimalPlace, BigDecimal.ROUND_HALF_UP);
		return bd.floatValue();
	}
}
