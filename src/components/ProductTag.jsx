import capitalFirstLetter from "@/lib/capitalFirstLetter";
import { Badge } from "./ui/badge";


function ProductTag({ tag }) {
  return (
    <Badge
      className={`${
        tag === "new"
          ? "bg-green-600 hover:bg-green-400"
          : tag === "featured"
          ? "bg-red-600 hover:bg-red-400"
          : "bg-yellow-300 hover:bg-yellow-200"
      }`}
    >
      {`${capitalFirstLetter(tag)}`}
    </Badge>
  );
}

export default ProductTag;
