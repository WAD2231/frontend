import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, Eye, Pencil, Trash2 } from 'lucide-react'

const products = [
  {
    id: "1",
    name: "Handmade Pouch",
    variants: "3 Variants",
    sku: "302012",
    category: "Bag & Pouch",
    stock: 10,
    price: "$121.00",
    status: "Low Stock",
    added: "29 Dec 2022",
  },
  {
    id: "2",
    name: "Smartwatch E2",
    variants: "2 Variants",
    sku: "302011",
    category: "Watch",
    stock: 204,
    price: "$590.00",
    status: "Published",
    added: "24 Dec 2022",
  },
  // Add more products as needed
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Product</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Dashboard</span>
            <span>/</span>
            <span>Product List</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            Export
          </Button>
          <Button>
            Add Product
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex items-center justify-between">
          <Input
            placeholder="Search product..."
            className="max-w-sm"
          />
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Select Dates</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" className="rounded border-gray-300" />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Added</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded" />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.variants}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Badge variant={product.status === "Published" ? "success" : "warning"}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>{product.added}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="p-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 1-10 from 100
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">
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
      </div>
    </div>
  )
}

