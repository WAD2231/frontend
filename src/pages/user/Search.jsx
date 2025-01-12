import { Suspense, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { SelectGroup, SelectLabel } from "@/components/ui/select";

import { Link, useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DualRangeSlider } from "@/components/ui/DualRangeSlider";
import { Badge } from "@/components/ui/badge";
import { getAllCategories } from "@/services/categoryServices";
import { getProducts } from "@/services/productServices";
import ProductTag from "@/components/ProductTag";
import routes from "@/config/routes";
import capitalFirstLetter from "@/lib/capitalFirstLetter";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [values, setValues] = useState([0, 1000]);

  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const keyword = searchParams.get("keyword");

  const currentPage = searchParams.get("page") || 1;

  const price_min = searchParams.get("price_min") || 0;

  const price_max= searchParams.get("price_max") || 1000;

  const category_id = searchParams.get("category_id") || "";

  const tag = searchParams.get("tag") || "";

  const [paging, setPaging] = useState({
    pageSize: 12,
    totalItems: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [categoriesData, productData] = await Promise.all([
        getAllCategories(),
        getProducts({
          current_page: currentPage,
          page_size: paging.pageSize,
          search: keyword,
          price_max,
          price_min,
          category_id,
          tag,
        }),
      ]);
      if (categoriesData.status === 200) {
        setCategories(categoriesData.data.normalCategories);
      }
      if (productData.status === 200) {
        setProducts(productData.data.products);
        setPaging({
          pageSize: productData.data.paging.page_size,
          totalItems: productData.data.paging.total_item,
          totalPages: productData.data.paging.total_page,
        });
      }
    };
    fetchData();
  }, [keyword, currentPage, price_min, price_max, category_id, tag]);

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set("price_min", values[0]);
    params.set("price_max", values[1]);
    setSearchParams(params);
  };

  return (
    <div className="container mx-auto px-[70px] py-8">
      <h1 className="text-3xl font-bold mb-8">Product Search</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Price Range</h2>
              <DualRangeSlider
                className="mt-10"
                label={(value) => value}
                value={values}
                onValueChange={setValues}
                min={0}
                max={1000}
                step={5}
              />
              <Button className="w-full mt-5" onClick={applyPriceFilter}>
                Apply
              </Button>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Tags</h2>
              <div className="space-y-2">
                <RadioGroup
                  value={tag}
                  onValueChange={(value) => {
                    const params = new URLSearchParams(searchParams);
                    params.set("tag", value);
                    setSearchParams(params);
                  }}
                >
                  {["new", "sale", "featured"].map((item) => {
                    return (
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={item} id={item} />
                        <Label htmlFor={item}>{capitalFirstLetter(item)}</Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <Select
                className="w-full"
                value={category_id}
                onValueChange={(value) => {
                  const params = new URLSearchParams(searchParams);
                  if (value === "All") {
                    params.delete("category_id");
                  } else {
                    params.set("category_id", value);
                  }
                  setSearchParams(params);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="All" key={""}>
                      All
                    </SelectItem>
                    {categories?.map((category) => (
                      <SelectItem
                        key={category?.category_id}
                        value={`${category?.category_id}`}
                      >
                        {category?.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.delete("price_min");
              params.delete("price_max");
              params.delete("category_id");
              params.delete("tag");
              setSearchParams(params);
            }}>Clear Filters</Button>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="mb-4 items-end">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="name_asc">Name: A to Z</SelectItem>
                <SelectItem value="name_desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Suspense fallback={<div>Loading products...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.map((product) => (
                // <Card
                //   key={product?.name}
                //   className="flex flex-col items-center"
                // >
                //   <CardContent className="p-4">
                //     <img
                //       src={product?.images[0].image_url}
                //       alt={product?.name}
                //       className="h-72 w-72 object-cover mb-4"
                //     />
                //     <h3 className="font-semibold text-lg mb-2">
                //       {product?.name}
                //     </h3>
                //     <div className="flex items-center gap-4">
                //       <p className="text-gray-600 dark:text-gray-300">
                //         ${product?.price}
                //       </p>
                //       {product?.discount > 0 && (
                //         <div className="text-gray-600 dark:text-gray-300">
                //           <Badge color="red" className="text-xs">
                //             -{product?.discount * 100}%
                //           </Badge>
                //         </div>
                //       )}
                //       <ProductTag tag={product?.tag} />
                //     </div>
                //   </CardContent>
                // <CardFooter className="flex flex-col">
                //   <div className="flex justify-between gap-12 mt-3">
                //     <Button variant="outline">+ Add to cart</Button>
                //     <Button>Buy Now</Button>
                //   </div>
                // </CardFooter>
                // </Card>

                <Link
                  to={`${routes.productDetail}/${product?.id}`}
                  className="min-w-[300px] flex flex-col gap-2 w-full"
                >
                  <Card className="flex flex-col justify-center items-center w-full h-full group relative">
                    <span className="absolute top-3 left-3">
                      {product?.discount && (
                        <button className="bg-[#DB4444] text-white px-2 py-1 rounded-md">
                          {`-${product?.discount * 100}%`}
                        </button>
                      )}
                    </span>
                    <span className="absolute top-3 right-3">
                      <ProductTag tag={product?.tag} />
                    </span>
                    <div className="group overflow-hidden flex justify-center p-8">
                      <img
                        src={product?.images[0].image_url}
                        alt={product?.name}
                      />
                    </div>

                    <div className="flex flex-col p-4 gap-3 w-full">
                      <div className="flex justify-between items-center">
                        <h1 className="text-lg font-medium">{product?.name}</h1>
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-bold">
                            ${product?.price}
                          </span>
                          {product?.discount && (
                            <span className="text-sm text-gray-500 line-through">
                              $
                              {(
                                product?.price /
                                (1 - product?.discount)
                              ).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardFooter className="flex flex-col p-2">
                      <div className="flex justify-between gap-12 mt-3">
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          + Add to cart
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </Suspense>
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
                  disabled={currentPage == 1}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.set("page", parseInt(currentPage) - 1);
                    setSearchParams(params);
                  }}
                >
                  Previous
                </Button>

                {[...Array(paging.totalPages).keys()].map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    size="sm"
                    className={
                      currentPage == page + 1
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                    onClick={() => {
                      const params = new URLSearchParams(searchParams);
                      params.set("page", page + 1); // Cập nhật tham số page
                      setSearchParams(params);
                    }}
                  >
                    {page + 1}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage == paging.totalPages}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.set("page", parseInt(currentPage) + 1); // Cập nhật tham số page
                    setSearchParams(params);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
