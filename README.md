# Mobile PWA Template

This is a template for a mobile Progressive Web App (PWA) built with modern web technologies.

## Features

- Progressive Web App capabilities
- Responsive design with Tailwind CSS
- Optimized for mobile devices
- Includes PWA manifest for installation
- Supports both development and production builds

## Using This Template

### Option 1: Clone to a New Directory

To clone this repository to a new project directory:

```bash
git clone <repository-url> <new-project-name>
cd <new-project-name>
```

Example:
```bash
git clone https://github.com/your-username/mobile_pwa.git my-new-project
cd my-new-project
```

### Option 2: Create a New Repository from This Template

You can also use GitHub's "Use this template" button to create a new repository with this codebase as the starting point.

### Changing the Remote

After cloning or creating a new repository from this template, you'll want to change the remote origin to point to your new project's repository:

1. Create a new empty repository on your preferred hosting platform (GitHub, GitLab, etc.)

2. Change the remote origin:
```bash
git remote set-url origin <new-repository-url>
```

Example:
```bash
git remote set-url origin https://github.com/your-username/my-new-project.git
```

3. Verify the remote has been updated:
```bash
git remote -v
```

## Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

## Installation

1. Install dependencies:

```bash
pnpm install
```

## Development

To start the development server:

```bash
pnpm run dev
```

This will start a local development server with hot reloading.

## Production Build

To create a production build:

```bash
pnpm run build
```

## Preview Production Build

To preview the production build locally:

```bash
pnpm run preview
```

This command serves the built application as it would run in production.

## Project Structure

- `src/` - Source files (JSX components)
- `public/` - Static assets (icons, manifest)
- `dist/` - Build output directory

## Technologies Used

- Vite - Build tool
- React - UI library
- Tailwind CSS - Styling
- JavaScript/JSX - Frontend code

---

*Created with Qwen*