# Gamer Audience Insights Platform

![Java](https://img.shields.io/badge/Backend-SpringBoot-green)
![React](https://img.shields.io/badge/Web-React-blue)
![React Native](https://img.shields.io/badge/Mobile-ReactNative-purple)
![Monorepo](https://img.shields.io/badge/Architecture-Monorepo-orange)

Full-stack data collection and analytics platform designed to help businesses, communities, and gaming projects understand **player preferences** through structured survey responses and dashboard visualization.

The system allows users to vote through a **mobile application** integrated with a backend API, while administrators and stakeholders can analyze the collected data through a **web dashboard** with records, filters, and metrics.

This project demonstrates how to transform raw audience feedback into a foundation for **data-driven decisions, KPI tracking, and continuous optimization**.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/pesquisaOnline.png" width="900">
</p>

---

# Problem

Gaming communities, content creators, publishers, and new gaming businesses often need to answer questions such as:

- Which platforms are most popular among users?
- What genres are growing faster?
- Which game titles attract the most engagement?
- What age groups prefer specific types of games?
- How can this data support product, marketing, or content decisions?

Without a structured system, this information is usually scattered across forms, chats, spreadsheets, or social media comments, making analysis difficult and limiting the ability to build a real **metrics culture**.

---

# Solution

This project simulates a **Gamer Audience Insights Platform** that collects player preferences and transforms them into organized records and visual dashboards.

Users submit their votes through a **mobile interface**, selecting information such as:

- name
- age
- platform (Xbox, PlayStation, etc.)
- favorite genre (RPG, Battle Royale, etc.)
- game title

That data is processed through a **Java Spring Boot backend** and exposed to a **React web dashboard**, where decision-makers can:

- browse records
- view paginated survey data
- analyze audience behavior
- support KPI / OKR discussions
- create a foundation for continuous optimization

---

# Business Value

This project was designed to show how software can support **audience intelligence** in the gaming market.

Potential use cases include:

- validating interest before launching a gaming business
- identifying the strongest player segments
- understanding platform preference by age group
- mapping genre popularity trends
- helping teams define product and marketing priorities
- supporting a culture of metrics and continuous improvement

Instead of only storing responses, the platform turns survey data into **actionable insight**.

---

# Key Outcomes

With a system like this, a business or organization can:

- centralize gamer preference data
- reduce manual analysis
- visualize trends faster
- support KPI and OKR tracking
- improve decision-making with real audience data
- create a base for future dashboards and product analytics

---

# Architecture

The repository follows a **monorepo architecture** with three integrated modules.

## Frontend Web

Built with **React**, the web application is responsible for:

- displaying survey records
- rendering dashboard views
- organizing paginated data
- supporting metrics visualization

## Mobile Application

Built with **React Native**, the mobile application is responsible for:

- collecting player votes
- enabling mobile-first participation
- integrating with the backend API

## Backend API

Built with **Java and Spring Boot**, the backend is responsible for:

- receiving and validating survey submissions
- processing data
- exposing REST API endpoints
- supporting frontend and mobile integration
- documenting endpoints with Swagger

---

# Challenges Solved

## 1. Turning user votes into structured data

The project transforms simple user input into an organized dataset that can be consumed by dashboards and analytics views.

## 2. Connecting mobile collection with centralized processing

Votes happen through the mobile app, but the data is processed centrally through the backend API, enabling consistency and future scalability.

## 3. Supporting decision-making through dashboards

Instead of keeping feedback in isolated records, the system makes it easier to interpret data visually and use it for KPI / OKR discussions.

## 4. Building a multi-platform architecture

The project separates responsibilities across Web, Mobile, and Backend layers, improving maintainability and showing a more realistic engineering structure.

## 5. Creating a foundation for continuous optimization

The platform was designed not just for collection, but to support a long-term mindset of measuring, learning, and improving.

---

# Screenshots

## Web Home

<p align="center">
  <img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa01.jpg" width="200">
</p>

## Pagination Layout

<p align="center">
  <img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa02.jpg" width="200">
</p>

## Dashboard

<p align="center">
  <img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa03.jpg" width="200">
</p>

## Mobile Home

<p align="center">
  <img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa04.jpg" width="200">
</p>

## Mobile Post Layout

<p align="center">
  <img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa05.jpg" width="200">
</p>

---

# Technology Stack

## Frontend Web
- React
- TypeScript
- CSS

## Mobile
- React Native

## Backend
- Java
- Spring Boot
- REST API
- Swagger

## Tools
- Git
- Netlify
- Heroku (initial backend deployment)

---

# Live Demo

Web interface deployed on Netlify:

https://thiagoreislimasds1.netlify.app/

> **Important note**
>
> The backend was originally deployed on **Heroku**, but Heroku discontinued the free tier.
>
> Because of that, the cloud demo currently loads only the **frontend interface**.
>
> The **complete backend implementation and mobile source code are fully available in this repository**, and the full system can be executed locally.

---

# Running the Project Locally

## Clone the repository

```bash
git clone https://github.com/Thiago771414/dsPesquisa
```
## Start the backend
```bash
cd backend
./mvnw spring-boot:run
```
## Run the web frontend
```bash
cd front-web
npm install
npm start
```
## Run the mobile application
```bash
cd front-web
npm install
npm start
```
## API Documentation
```bash
Swagger interface available when the backend is running locally:
http://localhost:8080/swagger-ui.html
```
## Learning Context
```bash
This project was developed as part of a full-stack training program focused on modern web architecture.
School:
https://devsuperior.com.br/sds-inscricao-org
```
Author

Thiago Reis Lima
Software Engineer

LinkedIn:
```bash
https://www.linkedin.com/in/thiago-lima-2a5896166/
```
