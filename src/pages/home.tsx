import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import axios from 'axios'
import { useProducts } from "../context";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products, setProducts } = useProducts()

  useEffect(() => {
    setProducts();
  }, [setProducts])

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {
          products.map((product) => {
            return (
              <Product {...product} key={product.id} />
            )
          })
        }
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
