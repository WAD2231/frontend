import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Home, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDarkMode } from "@/components/DarkModeContext";
import routes from "@/config/routes";

export default function ShoppingCart() {
  const { darkMode } = useDarkMode();
  // const [cart, setCart] = useState({
  //   user_id: 1,
  //   paging: {
  //     total_item: 5,
  //     total_page: 3,
  //     current_page: 1,
  //     page_size: 2,
  //   },
  //   items: [
  //     {
  //       product: {
  //         id: 1,
  //         name: "Laptop",
  //         price: 50,
  //         discount: 0.1,
  //         quantity: 20,
  //         images: [
  //           "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx2c6o16dh3v4f.webp",
  //           "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhojr3l1nv0hdd.webp",
  //         ],
  //       },
  //       quantity: 2,
  //     },
  //     {
  //       product: {
  //         id: 2,
  //         name: "Apple",
  //         price: 30,
  //         discount: 0.1,
  //         quantity: 100,
  //         images: [
  //           "https://down-vn.img.susercontent.com/file/sg-11134301-7rdwa-m01cuy3krx3d85.webp",
  //           "https://down-vn.img.susercontent.com/file/sg-11134301-7rdyh-m01cv6k8gwxf72.webp",
  //         ],
  //       },
  //       quantity: 2,
  //     },
  //   ],
  // });

  const [cartItems, setCartItems] = useState([
    {
      product: {
        id: 1,
        name: "Laptop",
        price: 50,
        discount: 0.1,
        quantity: 20,
        images: [
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx2c6o16dh3v4f.webp",
          "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhojr3l1nv0hdd.webp",
        ],
      },
      quantity: 2,
    },
    {
      product: {
        id: 2,
        name: "Apple",
        price: 30,
        discount: 0.1,
        quantity: 100,
        images: [
          "https://down-vn.img.susercontent.com/file/sg-11134301-7rdwa-m01cuy3krx3d85.webp",
          "https://down-vn.img.susercontent.com/file/sg-11134301-7rdyh-m01cv6k8gwxf72.webp",
        ],
      },
      quantity: 2,
    },
  ]);
  const [selectedItems, setSelectedItems] = useState(cartItems.map((item) => item.product.id));

  const isAllChecked =
    selectedItems.length === cartItems.length && cartItems.length > 0;

  const toggleSelectAll = () => {
    if (isAllChecked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.product.id));
    }
  };

  const toggleItemSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.product.id !== id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  const subtotal = selectedItems.reduce(
    (sum, id) =>
      sum +
        cartItems.find((item) => item.product.id === id)?.product.price *
          cartItems.find((item) => item.product.id === id)?.quantity || 0,
    0
  );

  const discount = 50;

  return (
    <div
      className={`min-h-screen mt-20 px-[50px] ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link
            to={routes.home}
            className="flex items-center gap-1 hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <span>/</span>
          <span className="text-muted-foreground">Shopping Cart</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div
              className={`rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-sm`}
            >
              <div
                className={`p-6 ${
                  darkMode ? "border border-gray-900" : "border border-gray-200"
                }`}
              >
                <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

                {/* Header */}
                <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={toggleSelectAll}
                    />
                  </div>
                  <div className="col-span-5">PRODUCTS</div>
                  <div className="col-span-2 text-right">PRICE</div>
                  <div className="col-span-2 text-center">QUANTITY</div>
                  <div className="col-span-2 text-right">REMOVE</div>
                </div>

                {/* Cart Items */}
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="grid grid-cols-12 gap-4 py-4 items-center"
                    >
                      <div className="col-span-1">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.product.id)}
                          onChange={() => toggleItemSelection(item.product.id)}
                        />
                      </div>
                      <div className="col-span-5 flex gap-4 items-center">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="rounded-lg h-20 w-20"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium">{item.product.name}</span>
                          <span className="text-sm text-muted-foreground">
                            ${item.product.price}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 text-right">${item.product.price}</div>
                      <div className="col-span-2">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="col-span-2 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div
              className={`rounded-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-900"
                  : "bg-white border border-gray-200"
              } shadow-sm p-6`}
            >
              <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sub-total</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-medium">-${discount}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${subtotal < discount ? 0 : subtotal - discount} USD</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6">Proceed to Checkout →</Button>
              <div className={`mt-6`}>
                <h3 className="font-medium mb-2">Coupon Code</h3>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1"
                  />
                  <Button variant="secondary">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
