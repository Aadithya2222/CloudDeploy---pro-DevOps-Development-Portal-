# 🚀 CloudDeploy Pro

A Full-Stack Serverless DevOps Deployment Portal built using AWS Cloud Services.

---

## 📌 Project Overview

CloudDeploy Pro is a cloud-native deployment management platform that enables authenticated users to create, monitor, and manage deployment requests.

The project is being developed to demonstrate practical usage of AWS services commonly used in real-world enterprise environments.

This project is focused on implementing:

- Authentication & Authorization
- Serverless Backend Architecture
- Event-Driven Processing
- CI/CD Automation
- Cloud Monitoring & Notifications

---

## 🏗️ Current Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
AWS Cognito
 │
 ▼
Dashboard
```

### Planned Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
API Gateway
 │
 ▼
AWS Lambda
 │
 ▼
DynamoDB
 │
 ▼
SQS Queue
 │
 ▼
Worker Lambda
 │
 ▼
SNS Notifications
```

### Deployment Pipeline

```text
GitHub
 │
 ▼
CodePipeline
 │
 ▼
CodeBuild
 │
 ▼
Deployment
```

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router

### Authentication

- Amazon Cognito
- AWS Amplify

### Backend (Planned)

- AWS Lambda
- API Gateway
- DynamoDB

### Event-Driven Services (Planned)

- Amazon SQS
- Amazon SNS

### DevOps & Monitoring (Planned)

- CodePipeline
- CodeBuild
- CloudWatch

### Deployment (Planned)

- Amazon S3
- CloudFront

---

## ☁️ AWS Services Used

### Implemented

- Amazon Cognito
- AWS Amplify

### Upcoming

- API Gateway
- Lambda
- DynamoDB
- SQS
- SNS
- CloudWatch
- CodePipeline
- CodeBuild
- S3
- CloudFront

---

## ✅ Completed Features

### Milestone 1 — Authentication System

- [x] Project Initialization
- [x] GitHub Repository Setup
- [x] React + TypeScript Setup
- [x] Tailwind CSS Setup
- [x] AWS Cognito User Pool Configuration
- [x] User Registration
- [x] Email Verification
- [x] User Login
- [x] User Logout
- [x] Protected Dashboard Access

---

## ✅ Completed Features

### Milestone 2 — Backend Foundation

- [x] DynamoDB Table Creation
- [x] Lambda Function Creation
- [x] IAM Permission Configuration
- [x] Deployment Request Data Model
- [x] Lambda → DynamoDB Integration
- [x] UUID-based Deployment IDs
- [x] Request Status Tracking

---

## 🎯 Future Enhancements

### Deployment Management

- Create Deployment Requests
- View Deployment History
- Deployment Status Tracking
- Environment Selection

### Event-Driven Automation

- Queue Deployment Requests
- Background Processing
- Deployment Notifications

### DevOps Automation

- CodeBuild Integration
- CodePipeline Integration
- Automated Build Tracking

### Monitoring

- CloudWatch Logs
- CloudWatch Metrics
- Error Tracking Dashboard

---

## 📊 Project Progress

| Module | Status |
|----------|----------|
| Frontend Foundation | ✅ Complete |
| Authentication | ✅ Complete |
| API Layer | ⏳ In Progress |
| DynamoDB | ⏳ Pending |
| SQS | ⏳ Pending |
| SNS | ⏳ Pending |
| CodeBuild | ⏳ Pending |
| CodePipeline | ⏳ Pending |
| Monitoring | ⏳ Pending |
| Deployment | ⏳ Pending |

---

## 📅 Development Roadmap

### Phase 1

- Authentication System
- Dashboard Setup

**Status:** ✅ Completed

### Phase 2

- Deployment Request System
- API Gateway
- Lambda
- DynamoDB

**Status:** 🚧 In Progress

### Phase 3

- Event Driven Processing
- SQS
- SNS

### Phase 4

- CI/CD Automation
- CodeBuild
- CodePipeline

### Phase 5

- Production Deployment
- S3 Hosting
- CloudFront Distribution

---

## 👨‍💻 Developer

**Aadithya R**

AWS Developer Associate (In Progress)

Building practical cloud-native projects using AWS Serverless technologies.

---

## ⭐ Repository Goal

The objective of this repository is to showcase practical AWS development skills through a real-world serverless DevOps platform that demonstrates authentication, event-driven architecture, automation, monitoring, and CI/CD best practices.