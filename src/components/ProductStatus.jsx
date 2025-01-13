import { Badge } from "./ui/badge";


function ProductStatus({ stock }) {
  let status = "Available";
  if (stock === 0) {
    status = "Out of Stock";
  } else if (stock <= 10) {
    status = "Low Stock";
  }
  return (
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
  );
}

export default ProductStatus;
