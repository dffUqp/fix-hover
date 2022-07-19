import React, { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/resItems.json";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../UI/button/Button";
import Loader from "../UI/Loader";
import styles from "./cartItem.module.scss";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps): JSX.Element | null => {
  const item = storeItems.find((elem) => elem.id === id);
  const { increaseCartQuntity, decreaseCartQuntity } = useShoppingCart();
  const [loading, setLoading] = useState<boolean>(false);

  if (item == null) return null;

  const decrease = () => {
    setLoading(true);

    setTimeout(() => {
      decreaseCartQuntity(id);
      setLoading(false);
    }, 300);
  };

  const increase = () => {
    setLoading(true);

    setTimeout(() => {
      increaseCartQuntity(id);
      setLoading(false);
    }, 300);
  };

  return (
    <div className={styles.item}>
      {loading && <Loader />}

      <div className={styles.item__price_container}>
        <span className={styles.item__title}>{item.name}</span>
      </div>

      <span className={styles.item__price}>
        {formatCurrency(item.price * quantity)}
      </span>

      <div className={styles.item__btns}>
        <Button onClick={decrease}>-</Button>
        <span className={styles.item__quantity}>{quantity}</span>
        <Button onClick={increase}>+</Button>
      </div>
    </div>
  );
};

export default CartItem;
