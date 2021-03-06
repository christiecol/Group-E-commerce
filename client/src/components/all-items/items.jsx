import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../actions";
import { COLORS } from "../../constants";
import { Loading } from "../Loading";

const Items = ({ item, status }) => {
  const dispatch = useDispatch();
  const { name, price, imageSrc, category, numInStock, _id } = item;

  // we need to acces all brands to get the name of the brand matching with companyId
  const brand = item.companyId;

  if (!item) {
    return null;
  }

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <ImageDiv>
        <Image src={imageSrc} alt={name} />
      </ImageDiv>
      <Main>
        <Name aria-label={name}>{name}</Name>
        <Category>{category}</Category>
      </Main>
      <Sub>
        <Price>{price}</Price>
        {numInStock <= 0 ? (
          <OutofStock tabIndex="0" aria-label="out of stock">
            Out of stock
          </OutofStock>
        ) : (
          <Div>
            <BuyButton
              onClick={() =>
                dispatch(addToCart({ _id, name, price, numInStock }))
              }
              tabIndex="0"
              aria-label="add to cart"
            >
              Add to cart
            </BuyButton>
          </Div>
        )}
      </Sub>
    </Wrapper>
  );
};

const Div = styled.div`
  background-color: #d45e09;
  overflow: hidden;

  &:active {
    background-color: brown;
  }
`;

const Wrapper = styled.div`
  width: 25%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    min-width: 25%;
    margin: 0 auto;
  }

  @media screen and (max-width: 900px) {
    min-width: 33%;
    margin: 0 auto;
  }

  @media screen and (max-width: 735px) {
    min-width: 50%;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    min-width: 100%;
    margin: 10px auto;
  }
`;

const Main = styled.div`
  padding: 10px;
  overflow: hidden;
  width: 100%;
`;

const Name = styled.h1`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Category = styled.p`
  color: #d45e09;
  font-size: 11px;
  font-style: italic;
  margin-bottom: 15px;
`;

const ImageDiv = styled.div`
  padding: 10px;
  min-height: 180px;
  min-width: 180px;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  overflow: hidden;
  min-width: auto;
  min-height: 180px;
`;

const Sub = styled.div`
  width: 100%;
`;

const Price = styled.h1`
  padding: 0 10px;
  font-size: 25px;
  margin-bottom: 10px;
`;

const OutofStock = styled.div`
  width: 100%;
  height: 35px;
  padding: 10px 0;
  text-align: center;
  font-size: 13px;
  font-style: italic;
  background-color: grey;
  color: white;
  cursor: not-allowed;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 10px 0;
  outline: none;
  border: none;
  text-decoration: none;
  background-color: #d45e09;
  color: white;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
    background-color: brown;
  }
`;

export default Items;
