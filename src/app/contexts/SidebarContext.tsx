import { createContext, useState, useEffect } from 'react';
import { ProductsResponse } from '../services/productsService/getById';
import toast from 'react-hot-toast';

interface SidebarProps {
  isOpen: boolean;
  toggleIsOpen(): void;
  cart: CartType[];
  addToCart(product: ProductsResponse): void;
  decreaseAmount(productId: number): void;
  finalPrice: number;
  clearCart(): void;
}

export type CartType = {
  product: ProductsResponse;
  amount: number;
}

export const SidebarContext = createContext({} as SidebarProps);

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartType[]>([]);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  function toggleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function addToCart(product: ProductsResponse) {
    const cartItemExists = cart.find((item) => {
      return item.product.id === product.id;
    });

    if (cartItemExists) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      setCart((prevState) => [...prevState, { product, amount: 1 }]);
    }

    toast.success('Item added to the cart')
  }

  function removeFromCart(productId: number) {
    const newCart = cart.filter((item) => {
      return item.product.id !== productId;
    });

    setCart(newCart);
  }

  function decreaseAmount(productId: number) {
    const cartItem = cart.find((item) => item.product.id === productId);

    if (cartItem && cartItem.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, amount: item.amount - 1 }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem && cartItem.amount < 2) {
      removeFromCart(productId);
    }
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    function updateFinalPrice() {
      const finalPrice = cart.reduce((acc, item) => {
        return acc + parseFloat(item.product.price) * item.amount;
      }, 0);
  
      setFinalPrice(finalPrice);
    }

    updateFinalPrice();
  }, [cart]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen, cart, addToCart, decreaseAmount, finalPrice, clearCart }}>
      { children }
    </SidebarContext.Provider>
  )
}