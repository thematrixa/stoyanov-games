package com.gorchovski.stoyanovgames.utils;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class DateParser extends JsonDeserializer<Date> {

	private SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");

	@Override
	public Date deserialize(JsonParser paramJsonParser, DeserializationContext paramDeserializationContext)
			throws IOException, JsonProcessingException {
		String str = paramJsonParser.getText().trim();
		try {
			return dateFormat.parse(str);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return paramDeserializationContext.parseDate(str);
	}
}
