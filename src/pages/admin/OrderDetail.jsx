import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CreditCard,
  Truck,
  User,
  Mail,
  Phone,
  FileText,
  Package,
  Gift,
  MapPin,
  Download,
  FileCheck,
  CheckCircle2,
  Clock,
  Box,
  PackageCheck,
  PackageX,
} from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@/config/routes";

export default function OrderDetail() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Orders</h1>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Orders</span>
              <span>/</span>
              <span>Orders Detail</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="processing">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <FileCheck className="h-4 w-4 mr-2" />
            Invoice
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Order #302011</div>
                <Badge variant="secondary" className="mt-1">
                  Processing
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Added</div>
                <div className="text-muted-foreground">12 Dec 2022</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Payment Method</div>
                <div className="text-muted-foreground">Visa</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Shipping Method</div>
                <div className="text-muted-foreground">Flat Shipping</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Customer</div>
                <div className="text-muted-foreground">Josh Adam</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Email</div>
                <div className="text-muted-foreground">josh.adam@mail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Phone</div>
                <div className="text-muted-foreground">909 427 2910</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Invoice</div>
                <div className="text-muted-foreground">INV-32011</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Package className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Shipping</div>
                <div className="text-muted-foreground">SHP-2011REG</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium">Rewards</div>
                <div className="text-muted-foreground">480 point</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Order List</CardTitle>
                <Badge variant="secondary">2 Products</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground">
                  <div className="col-span-4">Product</div>
                  <div className="col-span-2">SKU</div>
                  <div className="col-span-2">QTY</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-2">Total</div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-muted rounded-lg" />
                      <div>
                        <div className="font-medium">Smartwatch E2</div>
                        <div className="text-sm text-muted-foreground">
                          Black
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-sm">302011</div>
                    <div className="col-span-2 text-sm">1 pcs</div>
                    <div className="col-span-2 text-sm">$400.00</div>
                    <div className="col-span-2 text-sm font-medium">
                      $400.00
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-muted rounded-lg" />
                      <div>
                        <div className="font-medium">Headphone G1 Pro</div>
                        <div className="text-sm text-muted-foreground">
                          Black Gray
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-sm">302011</div>
                    <div className="col-span-2 text-sm">1 pcs</div>
                    <div className="col-span-2 text-sm">$185.00</div>
                    <div className="col-span-2 text-sm font-medium">
                      $185.00
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">$585.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">VAT (0%)</span>
                    <span className="font-medium">$0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping Rate</span>
                    <span className="font-medium">$5.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Grand Total</span>
                    <span className="font-medium">$590.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Billing</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  1833 Bel Meadow Drive, Fontana, California 92335, USA
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Shipping</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  1833 Bel Meadow Drive, Fontana, California 92335, USA
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Order Placed</div>
                    <div className="text-xs text-muted-foreground">
                      An order has been placed.
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      12/12/2022, 03:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Processing</div>
                    <div className="text-xs text-muted-foreground">
                      Seller has processed your order.
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      12/12/2022, 03:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <Box className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Packed</div>
                    <div className="text-xs text-muted-foreground">
                      DD/MM/YY, 00:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <PackageCheck className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Shipping</div>
                    <div className="text-xs text-muted-foreground">
                      DD/MM/YY, 00:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <PackageX className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Delivered</div>
                    <div className="text-xs text-muted-foreground">
                      DD/MM/YY, 00:00
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
