import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import ImagePicker from "@/components/ImagePicker";
import SelectCategory from "@/components/SelectCategory";
import { getAllCategories, getManufacturers } from "@/services/categoryServices";
import { createProduct } from "@/services/productServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyAlertDialog from "@/components/MyAlertDialog";

function AddProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, manufacturersResponse] = await Promise.all([
          getAllCategories(),
          getManufacturers(),
        ]);

        if (categoriesResponse.status === 200) {
          setCategories(categoriesResponse.data.categories);
        }

        if (manufacturersResponse.status === 200) {
          setManufacturers(manufacturersResponse.data.manufacturers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [fields, setFields] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    stock: 0,
    category_id: 0,
    manufacturer_id: 0,
    tag: "",
    images: [],
  })

  const handleSelectedCategory = (category_id) => {
    setFields({ ...fields, category_id: category_id });
  }

  const handleSelectedImage = (images) => {
    setFields((prevFields) => ({ ...prevFields, images }));
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("name", fields.name);
    formData.append("description", fields.description);
    formData.append("price", fields.price);
    formData.append("discount", fields.discount);
    formData.append("stock", fields.stock);
    formData.append("category_id", fields.category_id);
    formData.append("manufacturer_id", fields.manufacturer_id);
    formData.append("tag", fields.tag);
    fields.images.forEach((image) => {
      formData.append("image", image);
    });

    const response = await createProduct(formData);
    if (response.status === 201) { 
      navigate(`${routes.detailProduct}/${response.data.product.product_id}`);
    }

  }


  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to={routes.dashboard} className="hover:text-primary">
              Dashboard
            </Link>
            <span>/</span>
            <Link to={routes.product} className="hover:text-primary">
              Product List
            </Link>
            <span>/</span>
            <span>Add Product</span>
          </div>
          <h1 className="text-2xl font-semibold">Add Product</h1>
        </div>
        <div className="flex items-center space-x-2">
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  id="product-name"
                  placeholder="Type product name here..."
                  value={fields.name}
                  onChange={(e) => setFields({ ...fields, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Type product description here..."
                  className="min-h-[150px]"
                  value={fields.description}
                  onChange={(e) => {
                    setFields({ ...fields, description: e.target.value })
                  }}
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Image Picker */}
          <ImagePicker title={"Media"} imageName={"Image"} multiple={true} onChange={handleSelectedImage} image_urls={[]}/>

          <Card>
            <CardHeader>
              <CardTitle>Other Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="base-price">Base Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1.5">$</span>
                  <Input
                    id="base-price"
                    placeholder="Type base price here..."
                    className="pl-6"
                    value={fields.price}
                    onChange={(e) => setFields({ ...fields, price: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount-value">Discount Percentage (%)</Label>
                <Input
                  id="discount-value"
                  placeholder="Type discount percentage..."
                  value={fields.discount}
                  onChange={(e) => setFields({ ...fields, discount: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Type product quantity here..."
                  min="0"
                  value={fields.stock}
                  onChange={(e) => setFields({ ...fields, stock: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Product Category</Label>
                <SelectCategory categories={categories} label={"Select category"} onChange={handleSelectedCategory} selectedCategory={fields.category_id}/>
              </div>
              <div className="space-y-2">
                <Label>Product Tags</Label>
                <Select value={fields?.tag || "new"} onValueChange={(tag) => setFields({ ...fields, tag })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="sale">Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Manufacturer</CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(id) => setFields({ ...fields, manufacturer_id: id })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select manufacturer" />
                </SelectTrigger>
                <SelectContent>
                  {manufacturers?.map((manufacturer) => {
                    return (
                      <SelectItem key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      </div>
      <Button className="mt-4" onClick={handleAddProduct}>+ Add Product</Button>
    </div>
  );
}

export default AddProduct;
