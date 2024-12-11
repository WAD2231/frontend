import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Filter, Eye, Link2, ChevronDown } from 'lucide-react'

const orders = [
  {
    id: "#302012",
    product: "Handmade Pouch",
    additionalProducts: "+3 other products",
    date: "1 min ago",
    customer: {
      name: "John Bushmill",
      email: "johnb@mail.com"
    },
    total: "$121.00",
    payment: "Mastercard",
    status: "Processing"
  },
  {
    id: "#302011",
    product: "Smartwatch E2",
    additionalProducts: "+1 other products",
    date: "1 min ago",
    customer: {
      name: "Ilham Budi A",
      email: "ilhambudi@mail.com"
    },
    total: "$590.00",
    payment: "Visa",
    status: "Processing"
  },
  {
    id: "#302002",
    product: "Smartwatch E1",
    date: "5 hour ago",
    customer: {
      name: "Mohammad Karim",
      email: "m_karim@mail.com"
    },
    total: "$125.00",
    payment: "Transfer",
    status: "Shipped"
  },
  {
    id: "#301901",
    product: "Headphone G1 Pro",
    additionalProducts: "+1 other products",
    date: "1 day ago",
    customer: {
      name: "Linda Blair",
      email: "lindablair@mail.com"
    },
    total: "$348.00",
    payment: "Paypal",
    status: "Shipped"
  },
  {
    id: "#301900",
    product: "Iphone X",
    date: "2 day ago",
    customer: {
      name: "Josh Adam",
      email: "josh.adam@mail.com"
    },
    total: "$607.00",
    payment: "Visa",
    status: "Delivered"
  },
  {
    id: "#301881",
    product: "Puma Shoes",
    additionalProducts: "+1 other products",
    date: "5 Jan 2023",
    customer: {
      name: "Sin Tae",
      email: "sin_tae@mail.com"
    },
    total: "$234.00",
    payment: "Visa",
    status: "Cancelled"
  },
  {
    id: "#301643",
    product: "Imac 2021",
    date: "1 Jan 2023",
    customer: {
      name: "Rajesh Masvidal",
      email: "rajesh_m@mail.com"
    },
    total: "$760.00",
    payment: "Transfer",
    status: "Shipped"
  },
  {
    id: "#301600",
    product: "Nike Shoes",
    additionalProducts: "+1 other products",
    date: "24 Dec 2022",
    customer: {
      name: "Fajar Surya",
      email: "surya@mail.com"
    },
    total: "$400.00",
    payment: "Mastercard",
    status: "Delivered"
  },
  {
    id: "#301555",
    product: "Lego Car",
    additionalProducts: "+4 other products",
    date: "2 Dec 2022",
    customer: {
      name: "Francis Greg",
      email: "francisg@mail.com"
    },
    total: "$812.00",
    payment: "Paypal",
    status: "Delivered"
  },
  {
    id: "#301002",
    product: "Skincare Alia 1",
    additionalProducts: "+1 other products",
    date: "2 Dec 2022",
    customer: {
      name: "Linda Blair",
      email: "lindablair@mail.com"
    },
    total: "$123.00",
    payment: "Paypal",
    status: "Delivered"
  }
]

export function OrdersTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20">
            +2 Orders
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground">
            See More
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" className="rounded border-input" />
              </TableHead>
              <TableHead className="min-w-[180px]">
                <div className="flex items-center space-x-1">
                  <span>Order ID</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Total</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <input type="checkbox" className="rounded border-input" />
                </TableCell>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded" />
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
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.customer.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.customer.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.payment}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline"
                    className={
                      order.status === "Processing" 
                        ? "border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-900 dark:text-orange-300"
                        : order.status === "Shipped"
                        ? "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : order.status === "Delivered"
                        ? "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900 dark:text-green-300"
                        : "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900 dark:text-red-300"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Link2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between px-4 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing 1-10 from 100
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
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">5</Button>
            <Button variant="outline" size="sm">...</Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

