import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { deleteProduct, updateProductQuantity } from "@/services/cartServices";
import routes from "@/config/routes";

export function CartSidebar({ open, setOpen, cartItems, setCartItems }) {
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item?.product?.price * item?.quantity,
    0
  );

  const handleChangeQuantity = async (productId, quantity) => {
    const res = await updateProductQuantity(productId, quantity);
    if (res.status === 200) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const deleteProductInCart = async (productId) => {
    const res = await deleteProduct(productId);
    if (res.status === 200) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product.id !== productId)
      );
    }
  };

  return (
    <Sheet
      className="w-[400px]"
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) setOpen(false);
      }}
    >
      <SheetContent className="h-screen flex flex-col pb-0">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {cartItems?.map((item) => (
              <div
                key={item?.product?.id}
                className="flex items-center justify-between bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative flex-shrink-0">
                    <img
                      src={item?.product?.images[0]}
                      alt={item?.product?.name}
                      className="rounded-md w-10 h-10 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-medium text-[12px]">
                      {item?.product?.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {item?.product?.discount > 0 ? (
                        <>
                          <span className="font-semibold text-base">
                            $
                            {(
                              item?.product?.price *
                              (1 - item?.product?.discount)
                            ).toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${item?.product?.price}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold text-base">
                          ${item?.product?.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-h-6"
                      onClick={() => {
                        if (item?.quantity > 1)
                          handleChangeQuantity(
                            item?.product?.id,
                            item?.quantity - 1
                          );
                      }}
                    >
                      <Minus className="h-2 w-2" />
                    </Button>
                    <span className="w-4 text-center text-lg font-medium">
                      {item?.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-h-6"
                      onClick={() =>
                        handleChangeQuantity(
                          item?.product?.id,
                          item?.quantity + 1
                        )
                      }
                    >
                      <Plus className="h-2 w-2" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-500 hover:text-red-500"
                    onClick={() => deleteProductInCart(item?.product?.id)}
                  >
                    <Trash2 className="h-2 w-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium mb-2">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <Link to={routes.cart}>
            <Button className="w-full bg-black text-white hover:bg-gray-900" onClick={() => setOpen(false)}>
              Checkout
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full text-gray-600"
            onClick={() => setOpen(false)}
          >
            Continue shopping
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
