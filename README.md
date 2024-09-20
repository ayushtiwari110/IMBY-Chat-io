<p align="center">
  <img src="https://github.com/user-attachments/assets/43e67f05-c819-4b21-927c-1daf1667be0a" alt="chat-io logo" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E.svg?style=for-the-badge&logo=Supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/Pusher-300D4F.svg?style=for-the-badge&logo=Pusher&logoColor=white" />
  <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2.svg?style=for-the-badge&logo=Google-Gemini&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white" />
</p>
<h1 align="center">Chat io - Connect with your loved ones!💌</h1>


## Introduction

This project is an advanced real-time chat application developed as part of I'm Beside You's software internship assignment. 
The application showcases the ability to work with real-time data, handle user authentication, integrate third-party APIs, and deploy a production-ready web application.

## System Dseign Documentation📃
Please use this link to view the System Design Document for this project. [System Design Document](https://drive.google.com/file/d/1ijuBHEzg3TPzkJrAjjprPsMbrXBKOBQl/view?usp=sharing)

## Features ✨

- **Real-time Messaging**: Instant message delivery and updates 💬
- **Multiple Users Groups**: Form groups with your loved ones, see groups common between your friends 👨‍👩‍👧‍👦
- **Spam Prevention**: Chat only with the people whom you are friends with. Instantly Block spam users.  🚫
- **User Authentication**: Secure sign-up, login, and session management. View all your active devices at one place. 🔐
- **File Sharing**: Upload and share files such as images, audio, pdf,etc... within chats 📁
- **Emoji Support**: Rich text input with emoji picker 😄
- **Typing Indicators**: Real-time typing status of chat participants ✍️
- **Video Calls**: One-on-one video calling functionality, along with group video calls. 🎥
- **AI-powered Assistance**: Integration with Google's Gemini API for smart responses 🧠
- **Responsive Design**: Seamless experience across devices 📱💻
- **Dark Mode**: Toggle between light and dark themes 🌙
- **Message History**: Persistent chat history with pagination 📖
- **User Profiles**: Customizable user profiles with avatars 🧑‍💻

## Tech Stack 🚀

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

## Getting Started 🛠️

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
4. You will have to separately configure Convex and Clerk for proper integration. Refer to their quick-start guides for the same.

## Usage 🏃‍♂️

To run the development server, open two terminals and run the following:

```bash
npm run dev
```
```bash
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Architecture 🏗️

The application follows a microservices architecture, leveraging various cloud services:

- Next.js handles server-side rendering and a few API routes.
- Convex manages real-time data synchronization and backend API functions.
- Clerk provides user authentication and session management.
- Pusher enables real-time messaging and typing indicators.
- LiveKit facilitates video calls.
- Supabase stores and serves user-uploaded files.
- Google's Gemini API powers the AI chat assistance.

For a detailed system design, please refer to the [System Design Document](./SYSTEM_DESIGN.md).

## API Documentation 📚

The application uses several external APIs and services. Here's a brief overview:

- [Clerk API](https://clerk.com/docs): Used for user authentication.
- [Convex API](https://docs.convex.dev/): Handles data persistence and real-time updates.
- [Pusher API](https://pusher.com/docs): Manages real-time events.
- [LiveKit API](https://docs.livekit.io/): Facilitates video calls.
- [Supabase API](https://supabase.com/docs): Handles file storage.
- [Google Gemini API](https://ai.google.dev/docs): Provides AI-powered responses.

## Deployment 🚀

The application is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository.
2. Connect your Vercel account to your GitHub account.
3. Import the project into Vercel.
4. Configure the environment variables in Vercel's dashboard.
5. Deploy!

The live version of this application can be accessed at [https://www.chat-io.tech](https://www.chat-io.tech).

## Future Enhancements  💡

This chat application already boasts a variety of features, but there's always room to make it even more powerful and engaging! Here are some ideas for future enhancements:

- **Push Notifications:**  Notify users of new messages and calls even when the application is closed or minimized for a true mobile-first experience.
- **View Once Messages:**  Allow users to send messages that disappear after being viewed once, adding a layer of privacy to sensitive conversations. 
- **Message Reactions:**  Enable users to react to messages with emojis for a more expressive and fun way to interact.
- **End-to-end Encryption:**  Bolster security by incorporating end-to-end encryption, ensuring that only the intended recipients can read messages. 

## Contributing 🙌

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements 🙏

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
- Claude, Stack Overflow, ChatGPT for helping at times with debugging 

Let me know if you'd like me to add or modify any other sections! 😊 

## About Me 🧑‍💻
- Name: Ayush Tiwari
- Institute: IIT Bhubaneswar (Indian Institute of Technology Bhubanesawr)
- Department: Metallurgical and Materials Engineering
