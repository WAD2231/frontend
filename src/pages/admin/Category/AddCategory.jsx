import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  X } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import React, { useEffect, useState } from "react";
import ImagePicker from "@/components/ImagePicker";
import SelectCategory from "@/components/SelectCategory";
import { getAllCategories } from "@/services/categoryServices";

export default function AddCategory() {
  const [categories, setCategories] = useState([]);
  
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
        <div className="flex items-center space-x-2">
          <Button variant="ghost">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button>+ Add Category</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <ImagePicker title="Thumbnail" imageName="Photo" multiple={false} />

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="parent-category">Parent Category</Label>
              <SelectCategory categories={categories} label="Select super category"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category-name">Category Name</Label>
              <Input
                id="category-name"
                placeholder="Type category name here..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Type category description here..."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
