CV Builder Application

This is a web application built with React that allows users to create a professional, modern CV by filling out a simple, interactive form. The application provides a real-time preview of the resume as it's being built and allows the user to download the final CV as a PDF.

The user interface is split into two main sections: a form panel for data entry and a live preview panel that renders the resume in real-time.

[Link to your live Vercel/Netlify deployment]

Screenshot

(You should replace this with a screenshot of your finished application)

Features

Live Preview: See your resume update in real-time as you type.

Professional Template: Based on a modern, two-column resume design (as provided in the inspiration).

Component-Based Forms: A clean, easy-to-use form divided into logical sections:

General Information (Name, Title, Photo, Contact, Summary)

Professional Experience

Education

Technical Skills (by category)

Soft Skills

Dynamic Editing: Add, remove, and edit multiple entries for your job experience and education history.

PDF Export: Download your completed resume as a high-quality PDF document using html2canvas and jspdf.

State Management: All application state is cleanly managed in the top-level App.jsx component and passed down to forms and the preview.

Tech Stack

This project was built using the following technologies:

React: A JavaScript library for building user interfaces.

Vite: A modern, fast build tool for web development.

Tailwind CSS: A utility-first CSS framework for rapid UI styling.

html2canvas: For capturing an HTML element as a canvas.

jsPDF: For converting the canvas into a PDF document.

Getting Started

To run this project on your local machine, follow these steps:

Clone the repository:

git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)


Navigate to the project directory:

cd YOUR_REPO_NAME


Install the dependencies:

npm install


Run the development server:

npm run dev


The application will be available at http://localhost:5173 (or another port if 5173 is in use).

Deployment

This application is configured for easy, continuous deployment on static hosting platforms like Vercel or Netlify. Simply import your GitHub repository into one of these services, and it will automatically build and deploy the site.

Vercel Configuration:

Build Command: npm run build

Output Directory: dist

All other settings can be left as default.

Component Structure

App.jsx: The main application component. It holds all state and orchestrates the different parts of the app.

main.jsx: The entry point for the React application.

components/GeneralForm.jsx: Form for collecting basic user info (name, photo, contact, summary).

components/EducationForm.jsx: Form for managing education entries.

components/ExperienceForm.jsx: Form for managing work experience entries.

components/TechnicalSkillsForm.jsx: Form for managing categorized technical skills.

components/SoftSkillsForm.jsx: Form for managing a list of soft skills.

components/ResumeTemplate.jsx: The visual resume component used for the live preview and PDF export.

Acknowledgements

The design for this resume is based on a professional template provided as inspiration.