import { createContext, ReactNode, useContext, useState } from "react";
import CartModal from "../components/CartModal";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type TShoppingCartContext = {
  getItemQuntity: (id: number) => number;
  increaseCartQuntity: (id: number) => void;
  decreaseCartQuntity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function getItemQuntity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuntity(id: number) {
    setCartItems((currItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity:
                item.quantity !== 10 ? item.quantity + 1 : item.quantity,
            };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuntity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuntity,
        increaseCartQuntity,
        decreaseCartQuntity,
        removeFromCart,
        cartItems,
        openCart,
        closeCart,
      }}
    >
      {children}
      <CartModal isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
