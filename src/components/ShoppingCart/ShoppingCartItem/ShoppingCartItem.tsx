import { CartItem } from "~/app-state/cart";
import { toEuro } from "~/helpers";

import {
  CartItemContainer,
  Quantity,
  Name,
  Price,
} from "./ShoppingCartItem.styles";

type Props = {
  item: CartItem;
};

export const ShoppingCartItem = ({ item }: Props) => {
  const { name, price, quantity } = item;
  return (
    <CartItemContainer>
      <Quantity type="span">{quantity}</Quantity>
      <Name type="span">{name}</Name>
      <Price type="span">{toEuro(quantity * price)}</Price>
    </CartItemContainer>
  );
};
