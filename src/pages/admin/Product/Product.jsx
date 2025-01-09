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
import { useSearchParams } from "react-router-dom";
import formatDate from "@/lib/formatDate";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [paging, setPaging] = useState({
    totalPages: 0,
    pageSize: 15,
    totalItems: 0,
  });

  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchProducts = async ({ current_page, page_size }) => {
      const response = await getProducts({
        current_page,
        page_size,
      });
      if (response.status === 200) {
        console.log(response.data.products[0]);
        
        setProducts(response.data.products);
        setPaging({
          totalPages: response.data.paging.total_page,
          pageSize: response.data.paging.page_size,
          totalItems: response.data.paging.total_item,
        });
      }
    };

    fetchProducts({
      current_page: currentPage,
      page_size: paging.pageSize,
    });
  }, [currentPage]);

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
            {products?.map((product, index) => {
              let status = "Available";
              if (product.stock === 0) {
                status = "Out of Stock";
              } else if (product.stock <= 10) {
                status = "Low Stock";
              }
              return (
                <TableRow key={index}>
                  <TableCell>
                    <input type="checkbox" className="rounded border-input" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={product?.images[0]?.image_url}
                        alt={product.name}
                        className="h-10 w-10 rounded-md"
                      />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {product.variants}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        status === "Out of Stock"
                          ? "border-red-200 bg-red-300 text-red-700 dark:border-red-800 dark:bg-red-900 dark:text-red-300"
                          : status === "Low Stock"
                          ? "border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-900 dark:text-orange-300"
                          : status === "Available"
                          ? "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900 dark:text-green-300"
                          : "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {status}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(product?.created_at)}</TableCell>
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
              );
            })}
          </TableBody>
        </Table>

        <div className="p-4 border-t border-border flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {`Showing ${(currentPage - 1) * paging.pageSize + 1}-${
              (currentPage - 1) * paging.pageSize + products.length
            } from ${paging.totalItems} products`}
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setSearchParams({ page: currentPage - 1 })}>
              Previous
            </Button>
            {[...Array(paging.totalPages).keys()].map((page) => {
              return (
                <Button
                  key={page}
                  variant="outline"
                  size="sm"
                  className={
                    currentPage === page + 1
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                  onClick={() => {
                    setSearchParams({ page: page + 1 });
                  }}
                >
                  {page + 1}
                </Button>
              );
            })}
            <Button variant="outline" size="sm" disabled={currentPage === paging.totalPages} onClick={() => setSearchParams({ page: currentPage + 1 })}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
