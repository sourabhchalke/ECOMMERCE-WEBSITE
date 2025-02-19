import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress, Rating } from "@mui/material";
import { FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
import Button from "../components/Button";

import { useNavigate, useParams } from "react-router-dom";
import { openSnackbar } from "../redux/reducers/snackbarSlice";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToFavorite,
  deleteFromCart,
  deleteFromFavorite,
  getFavorite,
  getProductDetails,
} from "../api/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 30px 0px;

  @media screen and (max-width: 768px) {
    margin: 150px 0px 0px 0px;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

// Left Part Start
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 450px;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    height: 380px;
  }
`;

// Right Part Start
const Details = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 6px 0px;
  color: ${({ theme }) => theme.text_primary};
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 6px 0px;
  color: ${({ theme }) => theme.text_primary};
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};

  margin: 6px 0px;
`;
const Span = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary};
`;
const Percent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.green};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 6px 0px;
`;
const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500px;
`;
const Items = styled.div`
  display: flex;
  gap: 16px;
  margin: 6px 0px;
`;
const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ selected, theme }) =>
    selected && `background:${theme.primary};color:white`};
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin: 10px 0px;
`;

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();

  const [selected, setSelected] = useState();
  const [favorite, setFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    try {
      console.log("Fetching product with ID:", id);
      const res = await getProductDetails(id);
      console.log("API Response:", res);
      setProduct(res.data);
    } catch (error) {
      console.error(
        "Error fetching product:",
        error.response?.status,
        error.response?.data
      );
      dispatch(
        openSnackbar({ message: "Product not found!", severity: "error" })
      );
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async () => {
    setFavoriteLoading(true);
    const token = localStorage.getItem("shop-cart-token");
    await addToFavorite(token, { productID: product?._id })
      .then((res) => {
        setFavorite(true);
        setFavoriteLoading(false);
      })
      .catch((err) => {
        setFavoriteLoading(false);
        dispatch(
          openSnackbar({
            message: err.message,
            severity: "error",
          })
        );
      });
  };
  const removeFavorite = async () => {
    setFavoriteLoading(true);
    const token = localStorage.getItem("shop-cart-token");
    await deleteFromFavorite(token, { productID: product?._id })
      .then((res) => {
        setFavorite(false);
        setFavoriteLoading(false);
      })
      .catch((err) => {
        setFavoriteLoading(false);
        dispatch(
          openSnackbar({
            message: err.message,
            severity: "error",
          })
        );
      });
  };
  const addCart = async () => {
    cartLoading(true);
    const token = localStorage.getItem("shop-cart-token");
    await addToCart(token, { productId: product?._id, quantity: 1 })
      .then((res) => {
        setCartLoading(false);
        navigate("/cart");
      })
      .catch((err) => {
        setCartLoading(false);
        dispatch(
          openSnackbar({
            message: err.message,
            severity: "error",
          })
        );
      });
  };
  const checkFavourite = async () => {
    setFavoriteLoading(true);
    const token = localStorage.getItem("shop-cart-token");
    await getFavorite(token, { productId: product?._id })
      .then((res) => {
        const isFavorite = res.data?.some(
          (favorite) => favorite._id === product?._id
        );
        setFavorite(isFavorite);
        setFavoriteLoading(false);
      })
      .catch((err) => {
        setFavoriteLoading(false);
        dispatch(
          openSnackbar({
            message: err.message,
            severity: "error",
          })
        );
      });
  };

  useEffect(() => {
    getProduct();
    checkFavourite(); 
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Wrapper>
          <ImageWrapper>
            <Image src={product?.img} />
          </ImageWrapper>
          <Details>
            <div>
              <Title>{product?.title}</Title>
              <Name>{product?.Name}</Name>
            </div>
            <Rating />
            <Price>
              {product?.price?.org}
              <Span>{product?.price?.mrp}</Span>
              <Percent>{product?.price?.off}% Off</Percent>
            </Price>
            <Desc>{product?.desc}</Desc>
            <Sizes>
              <Items>
                {product?.size.map((size) => {
                  return (
                    <Item
                      selected={selected === size}
                      onClick={() => setSelected(size)}
                    >
                      {size}
                    </Item>
                  );
                })}
              </Items>
            </Sizes>
            <ButtonWrapper>
              <Button text="Add to Cart" outlined onClick={()=>addCart()} isLoading={favoriteLoading}/>
              <Button text="Buy Now" />
              <Button
                leftIcon={
                  favorite ? (
                    <FavoriteRounded sx={{ fontSize: "22px" ,color:"red"}} />
                  ) : (
                    <FavoriteBorder sx={{ fontSize: "22px" }} />
                  )
                }
                
                outlined
                isLoading={favoriteLoading}
                onClick={() => (favorite ? removeFavorite() : addFavorite())}
              />
            </ButtonWrapper>
          </Details>
        </Wrapper>
      )}
    </Container>
  );
}

export default ProductDetails;
