import { useEffect, useState } from "react";
import { useCart, useQuantity } from "../../context";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
};

const Product = ({ id, name, price, picture, quantity }: ProductProps) => {

  const {cart, setCart} = useCart();
  const {productquantity, setProductquantity} = useQuantity();
  const [increaseAmount, setIncreaseAmount] = useState(0)

  function handleIncrement() {
    setIncreaseAmount(increaseAmount + 1)
    setCart(id, name, price, picture, quantity)
    setProductquantity(id)
  }

  function handleDecrement() {
    const newProductquantity = productquantity
    const position = newProductquantity.indexOf(id)
    newProductquantity.splice(position, 1)

    setIncreaseAmount(increaseAmount - 1)
    setCart(id, name, price, picture, quantity)
  }

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />
  
      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </Column>
  
        <WrapperIncrementor>
          <Incrementor 
            id={id} 
            quantity={increaseAmount} 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
}


export default Product;
