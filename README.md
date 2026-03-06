# Survey Data Platform

Full-stack application designed to simulate a **public data collection and analytics platform** used for surveys and statistical dashboards.

The system allows users to submit survey information and visualize results through a **web dashboard and mobile interface**.

This project demonstrates a **monorepo architecture** integrating Web, Mobile, and Backend services.

---

# Project Overview

This system was designed to simulate a **government-style data platform** used to collect and analyze survey responses from citizens or research participants.

The platform includes:

• Survey data collection  
• Dashboard visualization  
• Paginated records  
• Mobile interface for data entry  
• REST API backend  
• Swagger API documentation  

The architecture follows a **modular monorepo structure**.

---

# System Architecture

The repository is organized into three main modules:

### Frontend Web
React application responsible for:

• displaying survey data  
• dashboards and charts  
• paginated records  
• data visualization

### Mobile Application
React Native mobile interface designed for:

• survey data submission  
• mobile-first interaction

### Backend API
Java (Spring Boot) backend responsible for:

• survey data processing  
• REST API endpoints  
• database communication  
• API documentation via Swagger

---

# Screenshots

## Web Home

<img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa01.jpg" width="900"/>

## Pagination Layout

<img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa02.jpg" width="900"/>

## Dashboard

<img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa03.jpg" width="900"/>

## Mobile Home

<img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa04.jpg" width="350"/>

## Mobile Post Layout

<img src="https://raw.githubusercontent.com/Thiago771414/imagensProjetos/main/slices/mobile/dsPesquisa05.jpg" width="350"/>

---

# Technology Stack

### Frontend Web
• React  
• TypeScript  
• CSS

### Mobile
• React Native

### Backend
• Java  
• Spring Boot  
• REST API  
• Swagger

### Tools
• Git  
• Netlify  
• Heroku (initial deployment)

---

# Live Demo

Web interface deployed on Netlify.

Application:

https://thiagoreislimasds1.netlify.app/

⚠ Important note

The backend was originally deployed on **Heroku**, however Heroku discontinued the free tier.

Because of that, the live demo currently loads only the **frontend interface**.

The **complete backend implementation and mobile application source code remain fully available inside this repository**.

Developers can run the full system locally.

---

# Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/Thiago771414/dsPesquisa
```

# Start the backend:

```bash
cd backend
./mvnw spring-boot:run
```

# Run the web frontend:

```bash
cd front-web
npm install
npm start
```

# Run the mobile application:

```bash
cd front-mobile
npm install
npm start
```

# API Documentation

Swagger interface available when backend is running locally:

```bash
[cd front-mobile
npm install
npm start](http://localhost:8080/swagger-ui.html)
```

# Learning Context
This project was developed as part of a full-stack training program focused on modern web architecture.
School:
```bash
https://devsuperior.com.br/sds-inscricao-org
```
# Author

Thiago Reis Lima
Software Engineer

# LinkedIn
```bash
https://www.linkedin.com/in/thiago-lima-2a5896166/
```



