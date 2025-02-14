import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeImg from "../utils/Images/Header.png";
import { category } from "../utils/data";
import ProductCategoryCard from "../components/cards/ProductCategoryCard";
import ProductCard from "../components/cards/ProductCard";

import {getAllProducts} from '../api/index';

// Css
const Container = styled.div`
  padding: 20px 20px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
`;

const Title = styled.p`
  margin: 50px 0px;
  font-size: 28px;
  font-weight: 500px;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "center")};
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await getAllProducts();
      console.log("✅ API Response:", res);
      if (res && Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        console.error("❌ API did not return an array:", res);
      }
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Section>
        <Img src={homeImg} />
      </Section>

      <Section>
        <Title>Shop By Categories</Title>
        <CardWrapper>
          {Array.isArray(category) &&
            category.map((item) => (
              <ProductCategoryCard category={item} key={item.id} />
            ))}
        </CardWrapper>
      </Section>

      <Section>
        <Title>Our BestSeller</Title>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <CardWrapper>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CardWrapper>
        )}
      </Section>
    </Container>
  );
}

export default Home;
