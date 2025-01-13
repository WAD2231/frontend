import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Product from "./Product";

export function FullWidthCarousel({ setIsOpenCart, products, setCartItems, cartItems }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-16">
        {products?.map((item, index) => (
          <CarouselItem key={item.id} className="pl-16 md:basis-1/4">
            <div className="h-full grid grid-cols-3 gap-4">
              <Product
                cartItems={cartItems}
                setIsOpenCart={setIsOpenCart}
                setCartItems={setCartItems}
                key={item?.id}
                id={item?.id}
                name={item?.name}
                price={item?.price}
                image={item?.images[0].image_url}
                discount={item?.discount}
                tag={item?.tag}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
