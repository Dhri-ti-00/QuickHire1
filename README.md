# QuickHire - Simple Job Board Application

This is a mini job board application built 
It includes a frontend in **Next.js** and a backend in **Node.js/Express**.

## Features

### Frontend (Next.js)
- Home page (`/`)  
- Job Listings page (`/jobs`)  
- Job Detail page (`/jobs/[id]`)  
- Navbar component  
- Dynamic routing for job details  
- Responsive layout (basic Tailwind CSS)

### Backend (Node.js/Express)
- RESTful API structure:
  - `GET /api/jobs` - List all jobs  
  - `GET /api/jobs/:id` - Get single job details  
  - `POST /api/jobs` - Add new job (admin)  
  - `DELETE /api/jobs/:id` - Delete job (admin)  
  - `POST /api/applications` - Submit job application  
- MongoDB database
cd backend
npm install
npm run dev
