import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  NotebookTabs,
  BarChart2,
  HelpCircle,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Product", href: "/products", icon: Package },
  { name: "Orders", href: "/orders", icon: ShoppingCart, badge: "3" },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Category", href: "/category", icon: NotebookTabs },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Support", href: "/supports", icon: HelpCircle },
  { name: "Setting", href: "/settings", icon: Settings },
];
function Navbar() {
  return (
    <div className="w-64 bg-background border-r border-border flex flex-col">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-xl font-bold">D</span>
          </div>
          <span className="text-xl font-bold">Dashlab</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start h-11 font-bold"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
              {item.badge && (
                <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navbar;
