import React from "react";
import { FiArrowRight } from "react-icons/fi";

import styled from "styled-components";

import { COLORS } from "../../constants";
import Cyclist from "../../assets/cyclist3.jpg";
import { useEffect } from "react";

export const AllItems = () => {
  const fetchItems = async () => {
    try {
      let data = await fetch("/items");
      data = await data.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <AllItemsDiv>
        <ViewAllDiv>
          <ViewAllA aria-label="view all store items" href="#">
            Shop All Items <FiArrowRight />
          </ViewAllA>
        </ViewAllDiv>
      </AllItemsDiv>
    </div>
  );
};

const AllItemsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;

const ViewAllDiv = styled.div``;

const ViewAllA = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: ${COLORS.orange};
  margin-left: 0;
  &:hover {
    color: #ff852e;
  }
`;
