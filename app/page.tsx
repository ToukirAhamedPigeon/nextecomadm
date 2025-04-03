import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className={cn("text-center text-3xl font-normal","text-blue-500","uppercase")}><Button variant="destructive" size="lg">Hello World</Button> This is Next E Commerce Admin App.</h1>
      </div>
    );
  }