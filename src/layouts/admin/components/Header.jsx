import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Search, ChevronDown } from "lucide-react";
function Header() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4 ml-auto">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5"/>
        </Button>
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>
        <Button variant="ghost" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="hidden lg:block text-left">
            <div className="text-sm font-medium">Jay Hargudson</div>
            <div className="text-xs text-gray-500">Manager</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
