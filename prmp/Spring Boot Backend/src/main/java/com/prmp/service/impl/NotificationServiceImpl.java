package com.prmp.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.prmp.service.NotificationService;

@Service
public class NotificationServiceImpl
        implements NotificationService {
	
	@Autowired
	private RestTemplate restTemplate;


    private static final String BASE_URL =
            "http://localhost:4000/notify";

    @Override
    public void sendTaskAssignedNotification(
            String message) {

        sendNotification(
                "/taskAssigned",
                message);
    }

    @Override
    public void sendTaskStatusUpdatedNotification(
            String message) {

        sendNotification(
                "/taskStatusUpdated",
                message);
    }

    @Override
    public void sendPredictionGeneratedNotification(
            String message) {

        sendNotification(
                "/predictionGenerated",
                message);
    }

    @Override
    public void sendSprintDeadlineAlert(
            String message) {

        sendNotification(
                "/sprintDeadlineAlert",
                message);
    }

    @Override
    public void sendManagerFeedbackNotification(
            String message) {

        sendNotification(
                "/managerFeedbackAdded",
                message);
    }

    private void sendNotification(
            String endpoint,
            String message) {

        Map<String, String> payload =
                new HashMap<>();

        payload.put(
                "message",
                message);

        restTemplate.postForObject(
                BASE_URL + endpoint,
                payload,
                String.class);
    }
}