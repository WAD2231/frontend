import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Store,
  BarChart2,
  HelpCircle,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Product", href: "/products", icon: Package },
  { name: "Orders", href: "/orders", icon: ShoppingCart, badge: "3" },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Seller", href: "/seller", icon: Store },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Support", href: "/support", icon: HelpCircle },
  { name: "Setting", href: "/settings", icon: Settings },
];

function Navbar() {
  return (
    <div className="w-64 bg-white border-r flex flex-col">
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">D</span>
          </div>
          <span className="text-xl font-bold">Dashlab</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start h-11 font-normal font-bold"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
