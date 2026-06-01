package com.prmp.service;

public interface NotificationService {

    void sendTaskAssignedNotification(
            String message);

    void sendTaskStatusUpdatedNotification(
            String message);

    void sendPredictionGeneratedNotification(
            String message);

    void sendSprintDeadlineAlert(
            String message);

    void sendManagerFeedbackNotification(
            String message);
}