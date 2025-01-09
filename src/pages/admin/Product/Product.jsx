import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Filter, Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import { getProducts } from "@/services/productServices";
import { useEffect, useState } from "react";
// const products = [
//   {
//     id: "1",
//     name: "Handmade Pouch",
//     variants: "3 Variants",
//     sku: "302012",
//     category: "Bag & Pouch",
//     stock: 10,
//     price: "$121.00",
//     status: "Low Stock",
//     added: "29 Dec 2022",
//   },
//   {
//     id: "2",
//     name: "Smartwatch E2",
//     variants: "2 Variants",
//     sku: "302011",
//     category: "Watch",
//     stock: 204,
//     price: "$590.00",
//     status: "Published",
//     added: "24 Dec 2022",
//   },
//   // Add more products as needed
// ];

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts({
        current_page: 1,
        page_size: 10,
      });
      if (response.status === 200) {
        setProducts(response.data.products);
        console.log(response.data.products);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Product</h1>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>/</span>
            <span>Product List</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Export</Button>
          <Link to={routes.addProduct}>
            <Button>+ Add Product</Button>
          </Link>
        </div>
      </div>

      <div className="bg-background rounded-lg shadow">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Input placeholder="Search product..." className="max-w-sm" />
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
                <input type="checkbox" className="rounded border-input" />
              </TableHead>
              <TableHead className="w-1/5">Product</TableHead>
              <TableHead className="w-1/6">Category</TableHead>
              <TableHead className="w-1/6">Stock</TableHead>
              <TableHead className="w-1/6">Price</TableHead>
              <TableHead className="w-1/6">Status</TableHead>
              <TableHead className="w-1/6">Added</TableHead>
              <TableHead className="w-1/6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input type="checkbox" className="rounded border-input" />
                </TableCell>
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
                <TableCell>{product.category_id}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      product?.status === "Low Stock"
                        ? "border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-900 dark:text-orange-300"
                        : product?.status === "Shipped"
                        ? "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : product?.status === "Published"
                        ? "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900 dark:text-green-300"
                        : "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900 dark:text-red-300"
                    }
                  >
                    {product?.status}
                  </Badge>
                </TableCell>
                <TableCell>{product?.added}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Link to={`${routes.detailProduct}/${product.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to={`${routes.editProduct}/${product.id}`}>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="p-4 border-t border-border flex items-center justify-between">
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
  );
}
