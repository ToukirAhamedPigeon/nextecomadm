import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        
        <h1 className={cn("container","text-center text-3xl font-normal","text-blue-500","uppercase")}><Button variant="destructive" className="bg-red-500 text-white" size="lg">Hello World</Button> This is Next E Commerce Admin App.</h1>
        <SignInButton />
      </div>
    );
  }