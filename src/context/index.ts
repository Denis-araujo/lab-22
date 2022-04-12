import create from "zustand";
import { ProductProps } from "../components/Product"
import axios from 'axios'


type Products = {
  products: ProductProps[];
  setProducts: () => void;
}

type Cart = {
  cart: ProductProps[];
  setCart: (id: number, name: string, price: number, picture: string, quantity: number) => void;
}

type Quantity = {
  productquantity: number[];
  setProductquantity: (id: number) => void;
}

export const useProducts = create<Products>(set => ({
  products: [],
  setProducts: async () => {
    const response = await axios.get(`http://localhost:3001/products`)
    set(() => ({products: response.data}))
  }
}));

export const useCart = create<Cart>(set => ({
  cart: [],
  setCart: (id, name, price, picture, quantity) => {
    set(({ cart }) => {
      let permission = true;
      cart.forEach(products => {
        if(products.id === id) permission = false
      })
      if(permission){
        return {cart: [...cart, {id, name, price, picture, quantity}]}
      }
      return {cart}
    })
  }
}))

export const useQuantity = create<Quantity>(set => ({
  productquantity: [],
  setProductquantity: (id) => {
    set(({ productquantity }) => ({
      productquantity: [...productquantity, id]
    }))
  }
}))
