package com.gorchovski.stoyanovgames.service;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.gorchovski.stoyanovgames.model.User;

@Component
public class EmailingService {

	@Autowired
	public JavaMailSender emailSender;
	@Autowired
	it.ozimov.springboot.mail.service.EmailService emailService;
	@Value("${server.port}")
	private String serverPort;
	@Value("${server.serverPath}")

	private String contextPath;

	public void sendSimpleMessage(String to, String subject, String text) {
		try {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setTo(to);
			message.setSubject(subject);
			message.setText(text);

			emailSender.send(message);
		} catch (MailException exception) {
			exception.printStackTrace();
		}
	}

	public void sendConfirmationEmail(User user) {
		this.sendSimpleMessage(user.getEmail(), "StoyanovGames Account Confirm",
				"Hello, If this mail is sent to you by mistake.Please forgive us and ignore this email.Use to following link "
						+ contextPath + serverPort + "/users/confirm/" + user.getUsername()
						+ "\n to activate your account");
	}

	public void sendResetPasswordEmail(User user, String link) {
		this.sendSimpleMessage(user.getEmail(), "StoyanovGames Forgotten Password",
				"Hello, If this mail is sent to you by mistake.Please forgive us and ignore this email.Use to following link "
						+ contextPath + serverPort + "/users/reset-password/" + link
						+ "\n to get new email containing a temporary password");
	}

	public void sendTemporaryPasswordEmail(User user, String newPassword) {
		this.sendSimpleMessage(user.getEmail(), "StoyanovGames Reset Password",
				"Hello,\n If this mail is sent to you by mistake.Please forgive us and ignore this email.This is your new temporary password.\n"
						+ newPassword + "\nIt will expire in 10 minutes.");

	}

	public void sendMessageWithAttachment(String to, String subject, String text, String pathToAttachment) {
		try {
			MimeMessage message = emailSender.createMimeMessage();
			// pass 'true' to the constructor to create a multipart message
			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(text);

			FileSystemResource file = new FileSystemResource(new File(pathToAttachment));
			helper.addAttachment("Invoice", file);

			emailSender.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}