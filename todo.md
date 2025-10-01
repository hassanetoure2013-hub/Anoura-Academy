# ANOURA Academy - MVP Development Plan

## Overview
Creating a comprehensive e-learning platform for public procurement and PPP training in Africa.

## Core Files to Create/Modify

### 1. Layout & Navigation
- `src/components/Header.tsx` - Main navigation with logo, menu, auth buttons
- `src/components/Footer.tsx` - Footer with links and contact info
- `src/components/Layout.tsx` - Main layout wrapper

### 2. Pages (8 files max limit)
- `src/pages/Index.tsx` - Homepage with hero, features, CTA (MODIFY)
- `src/pages/About.tsx` - Mission, vision, team
- `src/pages/Courses.tsx` - Course catalog with filters
- `src/pages/CourseDetail.tsx` - Individual course page
- `src/pages/Dashboard.tsx` - Student dashboard
- `src/pages/Contact.tsx` - Contact form with chatbot placeholder

### 3. Components
- `src/components/CourseCard.tsx` - Course display component
- `src/components/AuthModal.tsx` - Login/Register modal

## MVP Features Implementation
1. **Institutional Pages**: Home, About, Contact
2. **Course Catalog**: Browse and filter courses
3. **Course Details**: Full course information
4. **User Authentication**: Login/Register (localStorage for now)
5. **Student Dashboard**: Progress tracking, enrolled courses
6. **Responsive Design**: Mobile-first approach
7. **Modern UI**: Professional blue/gray theme

## Simplified for MVP
- Payment integration (placeholder)
- Video streaming (placeholder)
- Certificates (basic implementation)
- Admin panel (basic version)
- Gamification (basic points system)

## Technical Stack
- React + TypeScript
- Shadcn/UI components
- Tailwind CSS
- Local storage for data persistence
- Responsive design