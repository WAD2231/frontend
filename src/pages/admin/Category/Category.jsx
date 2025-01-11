import { useEffect, useState } from "react";
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
  ChevronDown,
  ChevronRight,
  Filter,
  Download,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import { getAllCategories } from "@/services/categoryServices";
import formatDate from "@/lib/formatDate";
const CategoryRow = ({ category, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <input type="checkbox" className="rounded border-input" />
        </TableCell>
        <TableCell>
          <div
            className="flex items-center gap-3"
            style={{ paddingLeft: `${level * 24}px` }}
          >
            {category?.children && (
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            )}
            {!category?.children && <div className="w-4" />}
            <img
              src={category?.thumbnail}
              alt={category?.name}
              className="w-8 h-8"
            />
            <div>
              <div className="font-medium">{category.name}</div>
              <div className="text-sm text-muted-foreground">
                {category.description}
              </div>
            </div>
          </div>
        </TableCell>
        <TableCell>{category?.sales?.toLocaleString()}</TableCell>
        <TableCell>{category?.stock?.toLocaleString()}</TableCell>
        <TableCell>{formatDate(category?.created_at)}</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <Link to={`${routes.detailCategory}/${category.category_id}`}>
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
      {isExpanded &&
        category?.children &&
        category?.children.map((child) => (
          <CategoryRow
            key={child.category_id}
            category={child}
            level={level + 1}
          />
        ))}
    </>
  );
};

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();
      if (response.status === 200) {
        setCategories(response.data.categories);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>/</span>
            <span>Categories</span>
          </div>
          <h1 className="text-2xl font-semibold">Categories</h1>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Link to={routes.addCategory} className="btn btn-primary">
            <Button>+ Add Category</Button>
          </Link>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between p-4 border-b">
          <div className="relative w-full md:w-80">
            <Input placeholder="Search category..." className="pl-4" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" className="rounded border-input" />
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Category
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Sales
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Stock
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Added
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.map((category) => (
              <CategoryRow
                key={category.category_id}
                category={category}
                level={0}
              />
            ))}
          </TableBody>
        </Table>
        {/* paging */}
        {/* <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between p-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing 1-10 from 15
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
              Next
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
