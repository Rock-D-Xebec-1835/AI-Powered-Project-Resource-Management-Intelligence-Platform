## Overview
This microservice is the AI and analytics engine of the Project Intelligence Platform. It processes project data, generates insights, and predicts project delays using both rule‑based logic and machine learning. The service is built using FastAPI, Pandas, and Scikit‑Learn, and is consumed by the Spring Boot backend.

## Aim
To build a scalable Python microservice that performs ETL, analytics, and machine learning to support intelligent project monitoring and delay prediction.

## Objectives
- Generate synthetic datasets for project simulation

- Build an ETL pipeline to clean and merge raw CSV data

- Compute analytics such as sprint velocity trends and risk indicators

- Train an ML model to predict project delays

- Expose REST APIs for predictions, analytics, and ML training

- Integrate seamlessly with Spring Boot and React

## Tech Stack

- Python 3.10+

- FastAPI – REST API framework

- Scikit‑Learn – Machine learning

- Faker – Synthetic data generation

- Joblib – Model serialization

- Uvicorn – ASGI server

## Key Features

- Synthetic dataset generation

- ETL pipeline for data cleaning & merging

- Analytics endpoints (velocity trends, at‑risk projects, delay trends)

- ML model training (Logistic Regression)

- Prediction engine (Rule‑based + ML)

- REST APIs for Spring Boot integration
