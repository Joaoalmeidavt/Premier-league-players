# PremierZone - https://premier-league-legacy.vercel.app/

//25.03.2025 MAKING A BETTER UI FOR USER EXPERIENCE !

PremierZone is a dynamic full-stack web application designed as an interactive portal for football statistics and insights. Built with a modern tech stack, it features a responsive ReactJS frontend powered by Tailwind CSS and a robust Spring Boot backend that efficiently handles football data for teams, nations, and player information.

> **Note:** This project currently focuses on delivering a seamless user experience for exploring football data. It does **not** include web scraping or machine learning features.

Check out the live website here: 

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Challenges & Solutions](#challenges--solutions)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Improvements](#future-improvements)


## Overview

PremierZone bridges the gap between raw football statistics and accessible, insightful information. The platform provides:
- A clean, modern interface that makes data exploration intuitive.
- RESTful API integration with Spring Boot for reliable data handling.
- Dynamic filtering and responsive layouts that work across all devices.

## Features

- **Dynamic Data Display:** Browse comprehensive details on teams, nations, and player positions.
- **Responsive Design:** Tailwind CSS ensures the UI is modern and fully responsive.
- **Interactive Navigation:** Smooth transitions and intuitive routing with React Router.
- **Robust Backend:** A Spring Boot API efficiently serves football data.
- **Powerful Data Filtering:** Search and filter functionalities for quick insights.

## Technologies

- **Frontend:** React, React Router, Tailwind CSS, Axios
- **Backend:** Spring Boot, Java, REST API
- **Tools:** Vite, Node.js, Maven, Git

## Challenges & Solutions

- **Integrating Modern UI with a Robust Backend:**  
  Designed a clean, component-based UI and set up a RESTful API with Spring Boot for seamless integration.
  
- **Handling Cross-Origin Requests:**  
  Configured CORS in Spring Boot via a dedicated configuration class to allow requests from the hosted frontend.
  
- **Responsive Design:**  
  Employed Tailwind CSS to build a fully responsive layout that adapts to various devices.
  
- **Dynamic Data Filtering:**  
  Optimized search functionality to quickly filter through extensive datasets, providing fast and accurate results.

## Getting Started

For most users, the best way to experience PremierZone is by visiting the live website:

[https://premierzone-fantasy.vercel.app](https://premierzone-fantasy.vercel.app)

### For Developers

If you wish to explore the code or run the project locally, please note that the application requires a proper database setup and additional configuration. This setup is non-trivial and is documented separately.

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/premierzone.git
   cd premierzone
   ```

2. **Setup Frontend**
   ```sh
   cd frontend
   npm install
   ```
   Create a `.env` file in the frontend root with:
   ```env
   VITE_API_URL=http://localhost:8080
   ```
   Start the development server:
   ```sh
   npm run dev
   ```

3. **Setup Backend**
   ```sh
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

> **Note:** Local setup requires a working database and additional configurations. For production, the hosted website is fully configured and ready to use.

## Usage
** WILL UPDATE SOON **


## Future Improvements
** WILL UPDATE SOON **
