import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Filter,
  Download,
  ChevronDown,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  Crown,
} from "lucide-react";

export default function CustomerDetail() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>/</span>
            <span>Customer List</span>
            <span>/</span>
            <span>Customer Details</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>+ Add Customer</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-muted" />
                <Badge
                  variant="secondary"
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground"
                >
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              </div>
              <h2 className="mt-4 text-xl font-semibold">Linda Blair</h2>
              <p className="text-sm text-muted-foreground">@linda.blair123</p>

              <div className="w-full mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 text-left">
                    <div className="text-sm text-muted-foreground">User ID</div>
                    <div className="text-sm font-medium">ID-011221</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 text-left">
                    <div className="text-sm text-muted-foreground">
                      Billing Email
                    </div>
                    <div className="text-sm font-medium">
                      lindablair@mail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 text-left">
                    <div className="text-sm text-muted-foreground">
                      Phone Number
                    </div>
                    <div className="text-sm font-medium">050 414 8778</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 text-left">
                    <div className="text-sm text-muted-foreground">
                      Delivery Address
                    </div>
                    <div className="text-sm font-medium">
                      1833 Bel Meadow Drive, Fontana, California 92335, USA
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 text-left">
                    <div className="text-sm text-muted-foreground">
                      Latest Transaction
                    </div>
                    <div className="text-sm font-medium">12 December 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Balance
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-bold">$723.00</h3>
                      <span className="text-sm font-medium text-red-500 dark:text-red-400">
                        -25%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <svg
                      className="w-6 h-6 text-orange-600 dark:text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Orders
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-bold">1,296</h3>
                      <span className="text-sm font-medium text-green-500 dark:text-green-400">
                        +10%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Rewards Point
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-bold">1400</h3>
                      <span className="text-sm font-medium text-green-500 dark:text-green-400">
                        +10%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Transaction History</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Select Date
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Total
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Status
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Date
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "#302012",
                      product: "Handmade Pouch",
                      additionalProducts: "+3 other products",
                      total: "$121.00",
                      status: "Processing",
                      date: "12 Dec 2023",
                    },
                    {
                      id: "#302011",
                      product: "Smartwatch E2",
                      additionalProducts: "+1 other products",
                      total: "$590.00",
                      status: "Processing",
                      date: "1 Dec 2023",
                    },
                    {
                      id: "#302006",
                      product: "Smartwatch E1",
                      total: "$125.00",
                      status: "Shipped",
                      date: "10 Nov 2023",
                    },
                    {
                      id: "#302001",
                      product: "Headphone G1 Pro",
                      additionalProducts: "+1 other products",
                      total: "$348.00",
                      status: "Shipped",
                      date: "2 Nov 2023",
                    },
                    {
                      id: "#301998",
                      product: "Iphone X",
                      total: "$607.00",
                      status: "Delivered",
                      date: "7 Sep 2023",
                    },
                  ].map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded-lg" />
                          <div>
                            <div className="font-medium">{order.product}</div>
                            {order.additionalProducts && (
                              <div className="text-sm text-muted-foreground">
                                {order.additionalProducts}
                              </div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            order.status === "Processing"
                              ? "border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-900 dark:text-orange-300"
                              : order.status === "Shipped"
                              ? "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900 dark:text-green-300"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing 1-5 from 1,296
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
                    ...
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
