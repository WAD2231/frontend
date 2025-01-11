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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Calendar, Filter, Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import { getProducts, deleteProduct } from "@/services/productServices";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import formatDate from "@/lib/formatDate";
import ProductStatus from "@/components/ProductStatus";
import MyAlertDialog from "@/components/MyAlertDialog";
import useDebounce from "@/hooks/useDebounce";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [paging, setPaging] = useState({
    totalPages: 0,
    pageSize: 15,
    totalItems: 0,
  });

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const debounceSearchValue = useDebounce(search, 500);

  useEffect(() => {
    const fetchProducts = async ({ current_page, page_size, search }) => {
      const response = await getProducts({
        current_page,
        page_size,
        search,
      });
      if (response.status === 200) {
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
      search: debounceSearchValue,
    });
  }, [currentPage, debounceSearchValue]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handleDeleteProduct = async (id) => {
    const response = await deleteProduct(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const handleContinue = () => { 
    setOpen(false);
  }

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen w-full">
      <MyAlertDialog isShown={open} setIsShown={setOpen} handleContinue={handleContinue} title="Product deleted successfully"/>
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
          <Input
            placeholder="Search product..."
            className="max-w-sm"
            onChange={handleSearch}
            value={search}
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
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    <ProductStatus stock={product.stock} />
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
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="flex flex-col items-center">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-xl">
                              Are you sure you want to delete this product?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogDescription></AlertDialogDescription>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteProduct(product.id)}>Yes</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {paging.totalPages > 1 && (
          <div className="p-4 border-t border-border flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {`Showing ${(currentPage - 1) * paging.pageSize + 1}-${
                (currentPage - 1) * paging.pageSize + products.length
              } from ${paging.totalItems} products`}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setSearchParams({ page: currentPage - 1 })}
              >
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
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === paging.totalPages}
                onClick={() => setSearchParams({ page: currentPage + 1 })}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
