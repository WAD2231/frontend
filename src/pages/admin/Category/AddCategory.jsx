import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import React, { useEffect, useState } from "react";
import ImagePicker from "@/components/ImagePicker";
import SelectCategory from "@/components/SelectCategory";
import { getAllCategories, createCategory } from "@/services/categoryServices";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState({
    super_category_id: 0,
    name: "",
    description: "",
    thumbnail: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();
      if (response.status === 200) {
        console.log(response.data.categories);
        setCategories(response.data.categories);
      }
    };

    fetchCategories();
  }, []);

  const handleSelectedCategory = (category_id) => {
    setCategory({ ...category, super_category_id: category_id });
  };

  const handleSelectedImage = (images) => {
    setCategory({ ...category, thumbnail: images[0] });
  };

  const handleCreateCategory = async () => {
    const formData = new FormData();
    formData.append("thumbnail", category.thumbnail);
    if (category.super_category_id !== 0) { 
      formData.append("super_category_id", category.super_category_id);
    }
    formData.append("name", category.name);
    formData.append("description", category.description);
    const response = await createCategory(formData);
    if (response.status === 201) {
      navigate(`${routes.detailCategory}/${response.data.category.category_id}`);
    } else {
      console.error("Error creating category:", response);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to={routes.dashboard} className="hover:text-primary">
              Dashboard
            </Link>
            <span>/</span>
            <Link to={routes.category} className="hover:text-primary">
              Categories
            </Link>
            <span>/</span>
            <span>Add Category</span>
          </div>
          <h1 className="text-2xl font-semibold">Add Category</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImagePicker
          title="Thumbnail"
          imageName="Photo"
          multiple={false}
          onChange={handleSelectedImage}
        />

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="parent-category">Parent Category</Label>
              <SelectCategory
                categories={categories}
                label="Select super category"
                selectedCategory={category.super_category_id}
                onChange={handleSelectedCategory}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category-name">Category Name</Label>
              <Input
                id="category-name"
                placeholder="Type category name here..."
                value={category.name}
                onChange={(e) =>
                  setCategory({ ...category, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Type category description here..."
                className="min-h-[150px]"
                value={category.description}
                onChange={(e) =>
                  setCategory({ ...category, description: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center space-x-2 mt-3">
        <Button variant="ghost">
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button onClick={handleCreateCategory}>+ Add Category</Button>
      </div>
    </div>
  );
}
