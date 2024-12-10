import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, MoreVertical } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Handmade Pouch",
    sku: "302012",
    sales: 401,
    amount: 84611,
    price: 121.0,
    status: "Low Stock",
  },
  {
    id: 2,
    name: "Smartwatch E2",
    sku: "302012",
    sales: 301,
    amount: 177000,
    price: 590.0,
    status: "Published",
  },
  {
    id: 3,
    name: "Smartwatch E1",
    sku: "302012",
    sales: 300,
    amount: 37500,
    price: 125.0,
    status: "Low Stock",
  },
  {
    id: 4,
    name: "Headphone G1 Pro",
    sku: "302012",
    sales: 298,
    amount: 103704,
    price: 348.0,
    status: "Published",
  },
  {
    id: 5,
    name: "Iphone X",
    sku: "302012",
    sales: 256,
    amount: 150000,
    price: 607.0,
    status: "Published",
  },
];

const locations = [
  {
    country: "United Kingdom",
    sales: 340,
    amount: 17678,
    change: "+12%",
    trending: "up",
  },
  {
    country: "Spain",
    sales: 100,
    amount: 5500,
    change: "-5%",
    trending: "down",
  },
  {
    country: "Indonesia",
    sales: 50,
    amount: 2500,
    change: "0%",
    trending: "neutral",
  },
  {
    country: "France",
    sales: 147,
    amount: 7456,
    change: "+19%",
    trending: "up",
  },
  {
    country: "Germany",
    sales: 540,
    amount: 24189,
    change: "-25%",
    trending: "down",
  },
  {
    country: "United Arab Emirates",
    sales: 345,
    amount: 15700,
    change: "+11%",
    trending: "up",
  },
  {
    country: "Turkey",
    sales: 560,
    amount: 24700,
    change: "-12%",
    trending: "down",
  },
  {
    country: "United States",
    sales: 48,
    amount: 2000,
    change: "+7%",
    trending: "up",
  },
  {
    country: "Japan",
    sales: 23,
    amount: 1500,
    change: "0%",
    trending: "neutral",
  },
];

export function SalesDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-medium">
            Top Selling Product
          </CardTitle>
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded" />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {product.variants}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell>${product.amount.toLocaleString()}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "Published" ? "default" : "secondary"
                      }
                      className={
                        product.status === "Published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-2 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Showing 1-5 from 15
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-primary text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-base font-medium">
              Sales by Location
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Sales performance by location
            </p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {locations.map((location) => (
            <div
              key={location.country}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-lg" />
                <div>
                  <div className="font-medium">{location.country}</div>
                  <div className="text-sm text-muted-foreground">
                    {location.sales} Sales
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="font-medium">
                  ${location.amount.toLocaleString()}
                </div>
                <Badge
                  variant="outline"
                  className={
                    location.trending === "up"
                      ? "text-green-600 dark:text-green-400"
                      : location.trending === "down"
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-600 dark:text-gray-400"
                  }
                >
                  {location.change}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
