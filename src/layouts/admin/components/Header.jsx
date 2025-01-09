import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Search, ChevronDown } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";
function Header({user, setUser}) {
  console.log(user);
  
  return (
    <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Search className="h-5 w-5" />
      </Button>
      <div className="flex items-center space-x-4 ml-auto">
        <div className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="relative">
          <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>
        <ModeToggle/>
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={user.avatar} alt={user.username} className="h-10 w-10 rounded-full" />
          <div className="hidden lg:block text-left">
            <div className="text-sm font-medium">{user.fullname}</div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}

export default Header;
