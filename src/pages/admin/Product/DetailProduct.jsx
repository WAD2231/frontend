import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";
import routes from "@/config/routes";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "@/services/productServices";
import ProductStatus from "@/components/ProductStatus";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await getProduct(id);
        if (response.status === 200) {
          console.dir(response.data);
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProduct(id);
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
            <Link to={routes.dashboard} className="hover:text-primary">
              Dashboard
            </Link>
            <span>/</span>
            <Link to={routes.product} className="hover:text-primary">
              Product List
            </Link>
            <span>/</span>
            <span>Product Details</span>
          </div>
          <h1 className="text-3xl font-bold">{product?.name}</h1>
        </div>
        <Link to={routes.editProduct}>
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-sm"
                >
                  <CarouselContent>
                    {product?.images?.map((image, index) => (
                      <CarouselItem
                        key={index}
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <img
                                src={image.image_url}
                                alt={`Product image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Product Name</h3>
                <p>{product?.name}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p>{product?.description}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                <p className="text-2xl font-bold">${product?.price}</p>
                {parseFloat(product?.discount) && (
                  <p className="text-sm text-muted-foreground">
                    {parseFloat(product?.discount)}% off
                  </p>
                )}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quantity in Stock</h3>
                <p>{product?.stock}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <Badge>{product?.category?.name}</Badge>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Manufacturer</h3>
                <Badge className="bg-green-600 hover:bg-green-400">
                  {product?.manufacturer?.name}
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Status</h3>
                <ProductStatus stock={product?.stock} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
