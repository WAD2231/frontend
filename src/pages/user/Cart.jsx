import Dialog from "@/components/Dialog";
import MyAlertDialog from "@/components/MyAlertDialog";
import { Button } from "@/components/ui/button";
import routes from "@/config/routes";
import updateLocalCart from "@/lib/updateCart";
import { updateProductQuantity } from "@/services/cartServices";
import { createOrder } from "@/services/orderServices";
import { Home, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ShoppingCart({ user, cartItems, setCartItems }) {
  const [selectedItems, setSelectedItems] = useState(
    cartItems?.items?.map((item) => item.product.id)
  );

  const isAllChecked =
    selectedItems?.length === cartItems?.items?.length &&
    cartItems?.items?.length > 0;

  const toggleSelectAll = () => {
    if (isAllChecked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems?.items?.map((item) => item?.product?.id));
    }
  };

  const toggleItemSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    if (cartItems?.isLocal) {
      setCartItems((prev) => {
        const newItems = prev?.items?.map((item) => {
          if (item.product.id == id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        updateLocalCart({ items: newItems });
        return {
          items: newItems,
          isLocal: true,
        };
      });
      return;
    }

    const response = await updateProductQuantity(id, newQuantity);

    if (response.status === 200) {
      setCartItems((prev) => {
        const newItems = prev?.items?.map((item) =>
          item.product.id === id ? { ...item, quantity: newQuantity } : item
        );
        return {
          items: newItems,
          isLocal: false,
        };
      });
    }
  };

  const removeItem = async (id) => {
    if (cartItems?.isLocal) {
      setCartItems((prev) => {
        const newItems = prev?.items?.filter((item) => item.product.id !== id);
        updateLocalCart({ items: newItems });
        return {
          items: newItems,
          isLocal: true,
        };
      });
      return;
    }
    const response = await deleteProduct(id);
    if (response.status === 200) {
      const newItems = cartItems?.items?.filter(
        (item) => item.product.id !== id
      );
      setCartItems({
        items: newItems,
        isLocal: false,
      });
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  const subtotal = selectedItems?.reduce(
    (sum, id) =>
      sum +
        cartItems?.items?.find((item) => item.product.id === id)?.product
          .price *
          cartItems?.items?.find((item) => item.product.id === id)?.quantity ||
      0,
    0
  );

  const discount = selectedItems?.reduce((sum, id) => {
    const item = cartItems?.items?.find((item) => item.product.id === id);
    return sum + item?.product.price * item?.quantity * item?.product.discount;
  }, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState("");

  const navigate = useNavigate();

  const handleAction = () => {
    if (label === "Please log in to before checkout") {
      navigate(`${routes.login}`);
    } else if (label === "Please update your information before checkout") {
      navigate(`${routes.editProfile}`);
    } else if (label === "Please select items to checkout") {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const [openMA, setOpenMA] = useState(false);

  const handleCreateOrder = async () => {
    if (selectedItems.length === 0) {
      setLabel("Please select items to checkout");
      setIsOpen(true);
    }

    if (!user) {
      setLabel("Please log in to before checkout");
      setIsOpen(true);
      return;
    }

    if (!user?.address || !user?.phone) {
      setLabel("Please update your information before checkout");
      setIsOpen(true);
      return;
    }

    const selectedProducts = cartItems?.items?.filter((item) =>
      selectedItems.includes(item.product.id)
    );
    let total = 0;
    const order = {
      total: 0,
      details: selectedProducts.map(function (item) {
        const subtotal = (
          item.product.price * item.quantity -
          item.product.price * item.quantity * item.product.discount
        ).toFixed(2);
        total += parseFloat(subtotal);
        return {
          product_id: item.product.id,
          quantity: item.quantity,
          subtotal: parseFloat(subtotal),
        };
      }),
    };
    order.total = parseFloat(total.toFixed(2));
    const response = await createOrder(order);
    if (response.status === 201) {
      setOpenMA(true);
      setCartItems({
        items: cartItems?.items?.filter(
          (item) => !selectedItems.includes(item.product.id)
        ),
        isLocal: false,
      });
      setSelectedItems([]);
    } else {
      setLabel(response.data.message);
      setIsOpen(true);
    }
  };

  const handleContinue = () => {
    setOpenMA(false);
    navigate(`${routes.profile}`);
  };

  return (
    <div className="min-h-screen px-[50px] dark:bg-gray-900 bg-gray-50 text-white">
      <MyAlertDialog
        isShown={openMA}
        setIsShown={setOpenMA}
        title={"Payment successfully"}
        handleContinue={handleContinue}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link
            to={routes.home}
            className="flex items-center gap-1 hover:text-primary dark:text-white text-black"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <span className="dark:text-white text-black">/</span>
          <span className="text-muted-foreground dark:text-white text-black">
            Shopping Cart
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="rounded-lg dark:bg-gray-800 bg-white shadow-sm">
              {cartItems?.items?.length > 0 ? (
                <div className="p-6 dark:border-gray-900 border border-gray-200">
                  <h1 className="text-2xl font-semibold mb-6 dark:text-white text-black">
                    Shopping Cart
                  </h1>

                  {/* Header */}
                  <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground dark:text-white text-black">
                    <div className="col-span-1">
                      <input
                        type="checkbox"
                        checked={isAllChecked}
                        onChange={toggleSelectAll}
                      />
                    </div>
                    <div className="col-span-4 text-center">Product Name</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Discount</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-1 text-center">Remove</div>
                  </div>

                  {/* Cart Items */}
                  <div className="divide-y">
                    {cartItems?.items?.map((item) => (
                      <div
                        key={item.product.id}
                        className="grid grid-cols-12 gap-4 py-4 items-center"
                      >
                        <div className="col-span-1">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.product.id)}
                            onChange={() =>
                              toggleItemSelection(item.product.id)
                            }
                          />
                        </div>
                        <div className="col-span-4 flex gap-4 items-center">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="rounded-lg h-16 w-16"
                          />
                          <div className="flex flex-col">
                            <span className="font-medium dark:text-white text-black text-sm">
                              {item.product.name}
                            </span>
                          </div>
                        </div>
                        <div className="col-span-2 text-center dark:text-white text-black">
                          ${item.product.price}
                        </div>
                        <span className="col-span-2 text-center dark:text-white text-black">
                          -$
                          {item.product?.discount > 0
                            ? (
                                item?.product?.discount * item?.product?.price
                              )?.toFixed(2)
                            : 0}
                        </span>
                        <div className="col-span-2">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 dark:text-white text-black"
                              onClick={() => {
                                console.log(item.product.id, item.quantity - 1);

                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                );
                              }}
                            >
                              <Minus className="h-4 w-4 dark:text-white text-black" />
                            </Button>
                            <span className="w-12 text-center dark:text-white text-black">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 dark:text-white text-black"
                              onClick={() => {
                                console.log(item.product.id, item.quantity - 1);
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                );
                              }}
                            >
                              <Plus className="h-4 w-4 dark:text-white text-black" />
                            </Button>
                          </div>
                        </div>
                        <div className="col-span-1 text-center dark:text-white text-black">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <h1 className="text-2xl font-semibold mb-6 dark:text-white text-black">
                    Shopping Cart
                  </h1>
                  <p className="text-muted-foreground text-center dark:text-white text-black">
                    Your cart is empty
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg dark:bg-gray-800 dark:border-gray-900 bg-white border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white text-black">
                Cart Totals
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sub-total</span>
                  <span className="font-medium dark:text-white text-black">
                    ${subtotal?.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-medium dark:text-white text-black">
                    -${discount?.toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold dark:text-white text-black">
                      Total
                    </span>
                    <span className="font-semibold dark:text-white text-black">
                      $$
                      {subtotal < discount
                        ? 0
                        : (subtotal - discount).toFixed(2)}{" "}
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6" onClick={handleCreateOrder}>
                Proceed to Checkout →
              </Button>
              <Dialog
                open={isOpen}
                setOpen={setIsOpen}
                label={label}
                handleAction={handleAction}
              ></Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
