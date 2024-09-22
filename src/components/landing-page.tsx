import { Button } from "@/components/ui/button"
import { MessageCircleIcon, VideoIcon, BrainCircuitIcon, ShieldCheckIcon, UsersIcon } from "lucide-react"

export default function LandingPage({SignInButton}: {SignInButton: React.ReactNode}) {
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/20 to-background dark:from-primary/10 dark:to-background">
      <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 border-b dark:bg-gray-800/95 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircleIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold dark:text-white">Chat io</span>
          </div>
          <nav>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-primary-400">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 rounded-lg bg-card p-6 shadow-lg dark:bg-gray-800">
          <div className="flex flex-col items-center space-y-2">
            <MessageCircleIcon className="h-12 w-12 text-primary" />
            <h1 className="text-2xl font-bold dark:text-white">Welcome to ChatApp</h1>
            <p className="text-center text-sm text-muted-foreground dark:text-gray-300">
              Connect with friends and colleagues instantly
            </p>
          </div>
          <div className="mt-4 text-xl justify-center text-center">
            {/* <Button className="w-full" size="lg">
              Sign In to Chat io
            </Button> */}
            <div className=" text-center inline-block font-medium bg-black text-white py-2 px-4 rounded-xl">
              {SignInButton}
            </div>
          </div>
        </div>
        
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-semibold dark:text-white">Why Choose ChatApp?</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<VideoIcon className="h-6 w-6" />}
              title="Audio/Video Calls"
              description="Crystal-clear audio and HD video calls with your contacts."
              color="text-blue-500 dark:text-blue-400"
              bgColor="bg-blue-100 dark:bg-blue-900"
            />
            <FeatureCard 
              icon={<BrainCircuitIcon className="h-6 w-6" />}
              title="AI Integration"
              description="Smart replies and content suggestions powered by AI."
              color="text-purple-500 dark:text-purple-400"
              bgColor="bg-purple-100 dark:bg-purple-900"
            />
            <FeatureCard 
              icon={<ShieldCheckIcon className="h-6 w-6" />}
              title="Secure Authentication"
              description="Your conversations are protected with state-of-the-art security."
              color="text-green-500 dark:text-green-400"
              bgColor="bg-green-100 dark:bg-green-900"
            />
            <FeatureCard 
              icon={<UsersIcon className="h-6 w-6" />}
              title="Group Conversations"
              description="Create and manage group chats for team collaboration or social circles."
              color="text-orange-500 dark:text-orange-400"
              bgColor="bg-orange-100 dark:bg-orange-900"
            />
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <a href="#" className="text-sm text-muted-foreground hover:underline dark:text-gray-400">
            2024 © Chat io
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline dark:text-gray-400">
            Made with ❤️ by a developer
          </a>
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description, color, bgColor }: { icon: React.ReactNode, title: string, description: string, color: string, bgColor: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg bg-card p-4 text-center shadow dark:bg-gray-800">
      <div className={`rounded-full p-3 ${color} ${bgColor}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-300">{description}</p>
    </div>
  )
}