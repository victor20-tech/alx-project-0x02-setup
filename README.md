# Next.js Project Setup and Basics

This repository serves as a **comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS**. It guides developers through creating a modern web application, covering fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

The core purpose of this project is to provide hands-on experience in building a clean, well-organized, and fully functional Next.js application.

---

## 🎯 Learning Objectives

By completing the tasks within this project, users will achieve the following objectives:

- Understand how to **scaffold a Next.js application** with TypeScript and Tailwind CSS.
- Learn to implement **basic routing** in Next.js using the **Pages Router**.
- Create **reusable, modular components** with defined **TypeScript interfaces**.
- Work effectively with component **props and state management**.
- Fetch and display data from external APIs (such as JSONPlaceholder).
- **Structure a Next.js project following best practices**.
- Build responsive layouts with navigation components (like the `Header.tsx` component).

---

## 🛠️ Technology Stack and Setup

This project uses a standard modern web stack:

- **Framework:** Next.js (using the Pages Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Linter:** ESLint  

The initial setup command used to scaffold the project enables TypeScript, ESLint, and Tailwind CSS, while specifically choosing to **not use the `src` directory or the App Router**.

---

## 📂 Project Structure Overview

The project structure is designed for best practices, ensuring clear separation of concerns:

| Directory       | Purpose                                             | Example Components/Files                 |
|-----------------|-----------------------------------------------------|------------------------------------------|
| **pages/**      | Defines application routes using the Pages Router.  | `index.tsx`, `home.tsx`, `about.tsx`, `users.tsx` |
| **components/** | Contains modular and reusable UI elements.          | `Button.tsx`, `Card.tsx`, `Header.tsx`, `PostModal.tsx` |
| **interfaces/** | Dedicated folder for TypeScript interfaces.         | `index.ts`                               |
| **styles/**     | Manages global CSS and Tailwind configuration.      | `globals.css`                            |
| **public/**     | Stores static assets like images and icons.         | `assets/images/`                         |

---

## ✅ Prerequisites

Before starting this project, ensure you have the following:

- Node.js (v16 or later)  
- npm or yarn package manager  
- Basic knowledge of React and TypeScript  
- Familiarity with HTML/CSS  
- Git and GitHub account  
- Code editor (VS Code recommended)  

---
