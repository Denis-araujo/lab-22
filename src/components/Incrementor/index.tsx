import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import {useCart} from '../../context/index'

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
  handleIncrement: () => void
  handleDecrement: () => void
};

const Incrementor = ({ id, quantity, handleIncrement, handleDecrement}: IncrementorProps) => {

  return (
    <Wrapper>
      <IconWrapper>
        <SubtractIcon aria-label="Subtract item" onClick={() => handleDecrement()}/>
      </IconWrapper>

      <Quantity>{quantity}</Quantity>

      <IconWrapper>
        <PlusIcon aria-label="Add item" onClick={() => handleIncrement()}/>
      </IconWrapper>
    </Wrapper>
  )
};

export default Incrementor;
