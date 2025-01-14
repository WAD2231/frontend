import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Search, ChevronDown, User } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";
import routes from "@/config/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
function Header({ user, setUser }) {
  // console.log(user);

  return (
    <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Search className="h-5 w-5" />
      </Button>
      <div className="flex items-center space-x-4 ml-auto">
        <ModeToggle />
        <div className="flex items-center space-x-3 cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="h-10 w-10 rounded-full"
                />
                <div className="hidden lg:block text-left">
                  <div className="text-sm font-medium">{user.fullname}</div>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link to={routes.home}>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
