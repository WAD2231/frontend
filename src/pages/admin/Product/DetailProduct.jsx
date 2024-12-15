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
import { Badge } from "@/components/ui/badge";
import { X, ImageIcon, Check } from "lucide-react";
import routes from "@/config/routes";
import { Link } from "react-router-dom";

export default function DetailProduct() {
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
            <span>Product Details</span>
          </div>
          <h1 className="text-2xl font-semibold">Product Details</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button>
            <Check className="h-4 w-4 mr-2" />
            Save Product
          </Button>
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
                <Input id="product-name" value="Smartwatch E2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value="Smartwatch E2 is a premium fitness tracker that connects with your phone via Bluetooth. Once paired with fitness tracker, Connect fitness tracker with your phone you will never miss a call and a message. The smart watches for android phones will vibrate to alert you if your phone receives any notifications. You can reject calls and view message directly from your watch. A best gift for family and friends"
                  className="min-h-[150px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Photo</Label>
                <div className="border-2 border-dashed rounded-lg p-4">
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                          <div className="absolute top-2 right-2">
                            <Badge
                              variant="secondary"
                              className="bg-background/80 backdrop-blur-sm"
                            >
                              <Check className="h-3 w-3 text-green-500" />
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="aspect-square flex flex-col items-center justify-center border-dashed"
                    >
                      <ImageIcon className="h-8 w-8 mb-2 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Add Image
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount-value">Discount Percentage (%)</Label>
                <Input
                  id="discount-value"
                  placeholder="Type discount percentage..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Type product quantity here..."
                  min="0"
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
                <Select defaultValue="watch">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="watch">Watch</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Product Tags</Label>
                <Select>
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
              <CardTitle>Status</CardTitle>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              >
                Published
              </Badge>
            </CardHeader>
            <CardContent>
              <Select defaultValue="published">
                <SelectTrigger>
                  <SelectValue placeholder="Select product status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
