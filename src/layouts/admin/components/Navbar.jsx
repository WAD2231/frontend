import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import routes from "@/config/routes";
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
  { name: "Dashboard", to: routes.dashboard, icon: LayoutDashboard },
  { name: "Product", to: routes.product, icon: Package },
  { name: "Customers", to: routes.customers, icon: Users },
  { name: "Category", to: routes.category, icon: NotebookTabs },
];
function Navbar() {
  return (
    <div className="w-64 bg-background border-r border-border flex flex-col">
      <div className="p-6">
        <Link to={routes.dashboard} className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-xl font-bold">D</span>
          </div>
          <span className="text-xl font-bold">Dashboard</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => (
          <NavLink key={item.name} to={item.to} className={({ isActive }) =>
            isActive
              ? "bg-primary/20 text-primary dark:bg-primary/20"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }>
            <Button
              variant="ghost"
              className="w-full justify-start h-11 font-bold flex"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
              {item.badge && (
                <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Button>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;