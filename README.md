# RBC Assignment - Documentation

## Overview
A React-based review management application built with React Router 7, TypeScript, and Tailwind CSS. Users can create, read, update, and delete (CRUD) reviews with filtering, rating, and status tracking capabilities.

## Key Features
- **CRUD Operations**: Add, edit, delete, and view reviews
- **Filtering**: Filter reviews by status or rating via dropdown headers
- **Status Tracking**: Assign review statuses (New, Ongoing, On-hold, Canceled, Done)
- **Star Rating**: 5-star rating indicator (clickable in form, display-only in table)
- **Validation**: Form validation with error messages
  - Title and description are always required
  - Comments and rating required only when status = "Done"
- **Modal Interface**: Add/edit reviews in a modal popup
- **Responsive UI**: Built with Tailwind CSS

## Tech Stack
- **Framework**: React 19 + React Router 7
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Flowbite React
- **Build Tool**: Vite 7

## Project Structure
```
app/
├── components/        # Reusable UI components (Button, Form, Table, etc.)
├── config/           # Configuration & styling (component CSS, interfaces)
├── context/          # React Context (ReviewListProvider for state management)
├── pages/            # Page components (LandingPage)
├── routes/           # Route handlers
├── constants/        # Application constants
├── utils/            # Utility functions (validation, ID generation)
├── assets/           # SVG icons (Star, Edit, Trash, ArrowDown)
└── interfaces/       # TypeScript interfaces
```

## Core Components
- **ReviewTable**: Main component displaying reviews with CRUD actions and filtering
- **ReviewForm**: Modal form for creating/editing reviews with validation
- **StarRating**: Reusable 5-star rating component (interactive in form, static in table)
- **Dropdown**: Filter dropdown with custom options
- **InputField/TextareaField**: Form input components
- **Button**: Reusable button component

## State Management
Uses **React Context API** (`ReviewContext`) to manage the global review list across components.

## Review Attributes
Every review contains:
- **title** (string, required)
- **description** (string, required)
- **comments** (string, optional; required if status = "Done")
- **reviewRating** (1-5 stars, optional; required if status = "Done")
- **status** (New, Ongoing, On-hold, Canceled, or Done)
- **dateCreated** (auto-generated on creation)
- **dateUpdated** (auto-generated, updated on each modification)

## Configuration & Externalization

The application is **fully externalized** - all configurable items are separated from component logic:

- **Status values**: Defined in `app/config/interfaces/reviewProps.ts` (New, Ongoing, On-hold, Canceled, Done)
- **Form fields**: Defined in `reviewFormFields` config (not hardcoded in component)
- **Table columns**: Defined in `reviewTableFields` config
- **Component styling**: Centralized in `app/config/components/` (CSS classes, colors, spacing)
- **Text labels**: Externalized in config files (button labels, placeholder text)
- **Star rating amount**: Configurable via `starRatingDefaultTotalAmount`
- **Fonts**: Configured in `app/root.tsx` (loads from Google Fonts)
- **Colors & themes**: Implemented via Tailwind CSS configuration

All configurable items (fonts, status values, styling, form fields) are externalized and not hardcoded in component logic.

## Getting Started
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to access the application.

## GitHub Repository
[RBC_React_Assignment](https://github.com/Edsonzhu/RBC_React_Assignment)

