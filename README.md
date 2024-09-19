# Chat io - Connect with your loved ones💬

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Introduction

This project is an advanced real-time chat application developed as part of I'm Beside You, software internship assignment
The application showcases the ability to work with real-time data, handle user authentication, integrate third-party APIs, and deploy a production-ready web application.

## Features

- **Real-time Messaging**: Instant message delivery and updates
- **Multiple Users Groups**: Form groups with your loved ones, see groups common between your friend. 
- **Spam Prevention**: Chat only with the people whom you are friends with. Instantly Block spam users. 
- **User Authentication**: Secure sign-up, login, and session management. View all your active devices at one place.
- **File Sharing**: Upload and share files such as images, audio, pdf,etc... within chats
- **Emoji Support**: Rich text input with emoji picker
- **Typing Indicators**: Real-time typing status of chat participants
- **Video Calls**: One-on-one video calling functionality, along with group video calls.
- **AI-powered Assistance**: Integration with Google's Gemini API for smart responses
- **Responsive Design**: Seamless experience across devices
- **Dark Mode**: Toggle between light and dark themes
- **Message History**: Persistent chat history with pagination
- **User Profiles**: Customizable user profiles with avatars

## Tech Stack

### Frontend
- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **State Management**: Zustand
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Schema Validation**: Zod

### Backend
- **API Framework**: Convex API Functions
- **Database**: Convex (for real-time data)
- **Authentication**: Clerk
- **File Storage**: Supabase

### Real-time Features
- **Messaging**: Pusher
- **Video Calls**: LiveKit

### AI Integration
- Google's Gemini API (via Vercel AI SDK's Server Actions)

### Deployment
- Vercel (along with custom domain)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v7 or later)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayushtiwari110/IMBY-Chat-io.git
   cd IMBY-Chat-io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   Alternatively you can do:
   ```bash
   npm ci
   ```
   which installs the packages from the lock file.

### Configuration

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

   NEXT_PUBLIC_CONVEX_URL=your_convex_url

   NEXT_PUBLIC_PUSHER_KEY=your_pusher_app_key
   NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
   PUSHER_APP_ID=your_pusher_app_id
   PUSHER_SECRET=your_pusher_secret
   PUSHER_KEY=your_pusher_app_key
   PUSHER_CLUSTER=your_pusher_cluster

   LIVEKIT_API_KEY=your_livekit_api_key
   LIVEKIT_API_SECRET=your_livekit_api_secret
   NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url

   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
   ```

3. Replace `your_*` with your actual API keys and endpoints
4. You will have to separately configure convex and clerk for proper integration. Refer to their quick-start guides for the same.

## Usage

To run the development server, open two terminals and run the following:

```bash
npm run dev
```
```bash
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Architecture

The application follows a microservices architecture, leveraging various cloud services:

- Next.js handles server-side rendering and few API routes
- Convex manages real-time data synchronization and backend API Functions
- Clerk provides user authentication and session management
- Pusher enables real-time messaging and typing indicators
- LiveKit facilitates video calls
- Supabase stores and serves user-uploaded files
- Google's Gemini API powers the AI chat assistance

For a detailed system design, please refer to the [System Design Document](./SYSTEM_DESIGN.md).

## API Documentation

The application uses several external APIs and services. Here's a brief overview:

- [Clerk API](https://clerk.com/docs): Used for user authentication
- [Convex API](https://docs.convex.dev/): Handles data persistence and real-time updates
- [Pusher API](https://pusher.com/docs): Manages real-time events
- [LiveKit API](https://docs.livekit.io/): Facilitates video calls
- [Supabase API](https://supabase.com/docs): Handles file storage
- [Google Gemini API](https://ai.google.dev/docs): Provides AI-powered responses

## Deployment

The application is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository
2. Connect your Vercel account to your GitHub account
3. Import the project into Vercel
4. Configure the environment variables in Vercel's dashboard
5. Deploy!

The live version of this application can be accessed at [https://www.chat-io.tech](https://www.chat-io.tech).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Clerk](https://clerk.com/)
- [Convex](https://www.convex.dev/)
- [Pusher](https://pusher.com/)
- [LiveKit](https://livekit.io/)
- [Supabase](https://supabase.com/)
- [Google Gemini API](https://ai.google.dev/)
- [Vercel](https://vercel.com/)
- [https://v0.dev](https://v0.dev/) for helping with some UI Components
- All other open-source libraries used in this project
- Claude, StackOverflow, ChatGPT for helping at times with debugging
