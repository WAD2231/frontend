import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  X } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";
import React from "react";
import ImagePicker from "@/components/ImagePicker";

const categories = [
  {
    id: "1",
    name: "Electronics",
    children: [
      { id: "1-1", name: "Smartphones" },
      { id: "1-2", name: "Audio" },
      { id: "1-3", name: "PC Desktop" },
    ],
  },
  {
    id: "2",
    name: "Fashion",
    children: [
      { id: "2-1", name: "Bag & Pouch" },
      { id: "2-2", name: "Shoes" },
      { id: "2-3", name: "Hat" },
    ],
  },
  {
    id: "3",
    name: "Accessories",
    children: [
      { id: "3-1", name: "Watch" },
      { id: "3-2", name: "Camera" },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const SelectCategory = ({ categories }) => {
  const renderCategories = (categories, prefix = "") => {
    // eslint-disable-next-line react/prop-types
    return categories.map((category) => {
      const displayName = `${prefix}${category.name}`;
      return (
        <React.Fragment key={category.id}>
          <SelectItem value={category.id}>{displayName}</SelectItem>
          {category.children &&
            renderCategories(category.children, `${displayName} > `)}
        </React.Fragment>
      );
    });
  };

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select parent category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="top">None (Top Level)</SelectItem>
        {renderCategories(categories)}
      </SelectContent>
    </Select>
  );
};

export default function AddCategory() {
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
              <SelectCategory categories={categories} />
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
