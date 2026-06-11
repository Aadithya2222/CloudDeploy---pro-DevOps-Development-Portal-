# 🚀 CloudDeploy Pro

A cloud deployment platform inspired by Vercel and Netlify, built completely on AWS.

---

## 📌 Overview

CloudDeploy Pro allows users to:

* Register and Login securely
* Verify email accounts
* Create deployment requests
* Track deployment history
* Monitor deployment status
* Deploy applications using AWS infrastructure

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* AWS Lambda
* API Gateway
* DynamoDB

### Authentication

* AWS Cognito

### Hosting

* Amazon S3 Static Website Hosting

### Monitoring

* AWS CloudWatch

---

## 🏗️ Architecture

```text
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
```

---

## ✨ Features Completed

### Authentication System

* User Registration
* User Login
* Email Verification
* Protected Dashboard Access
* AWS Cognito Integration

### Deployment Management

* Create Deployment API
* Fetch Deployment History API
* Update Deployment Status API
* Deployment Tracking Dashboard

### AWS Integration

* Lambda Functions
* API Gateway Routes
* DynamoDB Storage
* IAM Permissions
* CloudWatch Logging
* S3 Website Hosting

---

## 📂 Project Structure

```bash
CloudDeploy-Pro/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── App.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── createDeployment/
│   ├── getDeployments/
│   ├── updateDeploymentStatus/
│   └── aws-config/
│
└── README.md
```

---

## 🚀 APIs Implemented

### Create Deployment

```http
POST /deployments
```

Creates a deployment request and stores it in DynamoDB.

---

### Get Deployments

```http
GET /deployments
```

Returns all deployment records.

---

### Update Deployment Status

```http
POST /status
```

Updates deployment status.

Example:

```json
{
  "deploymentId": "12345",
  "status": "DEPLOYED"
}
```

---

## 🗄️ DynamoDB Schema

```json
{
  "deploymentId": "uuid",
  "repository": "github-url",
  "branch": "main",
  "environment": "development",
  "status": "PENDING",
  "createdAt": "timestamp"
}
```

---

## 🌐 First Hosted Website

Successfully hosted a static website using:

* Amazon S3
* Static Website Hosting
* Public Bucket Policy

Example Output:

```html
Hello CloudDeploy 🚀
Day 1 Hosting Test Successful
```

---

## 📈 Day 1 Progress

### Completed

✅ AWS Cognito Setup

✅ Registration Flow

✅ Login Flow

✅ Email Verification

✅ Protected Dashboard

✅ Deployment Creation API

✅ Deployment History API

✅ Deployment Status Updates

✅ DynamoDB Integration

✅ IAM Permissions

✅ CloudWatch Debugging

✅ API Gateway Integration

✅ S3 Website Hosting

✅ First Successful Deployment Test

---

## 🎯 Upcoming Features

### Phase 2

* GitHub Repository Cloning
* AWS CodeBuild Integration
* Automated Build Process
* Automatic S3 Upload
* Deployment URLs

### Phase 3

* Custom Domains
* Deployment Logs
* Build Logs
* Environment Variables
* Team Workspaces
* Project Management

---

## 👨‍💻 Author

**Aadithya R**

Building a Vercel-like cloud deployment platform from scratch using AWS.

---

## ⭐ Day 1 Achievement

Built the complete foundation of a cloud deployment platform including authentication, APIs, deployment tracking, AWS infrastructure integration, and successful website hosting on Amazon S3.
