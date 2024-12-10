import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Search, ChevronDown } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";
function Header() {
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
        <Button variant="ghost" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-muted rounded-full" />
          <div className="hidden lg:block text-left">
            <div className="text-sm font-medium">Jay Hargudson</div>
            <div className="text-xs text-muted-foreground">Manager</div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
