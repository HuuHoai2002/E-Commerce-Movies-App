import React from "react";
import styled from "styled-components";
import { Overlay } from "../overlay";

const SearchModalStyles = styled.div`
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  width: 100%;
  height: 100%;
  min-width: ${(props) => props.minW || "450px"};
  min-height: ${(props) => props.minH || "450px"};
  background-color: ${(props) => props.bg || "white"};
  border-top: 1px solid rgb(225, 225, 225);
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5fa;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bcc0c4;
    border-radius: 6px;
  }
`;

const SearchModal = ({ top, minW, minH, bg, show, children }) => {
  return (
    <SearchModalStyles top={top} minW={minW} minH={minH} bg={bg}>
      <div className="search-content">
        <div className="w-full h-full">{children}</div>
      </div>
      <div>
        <Overlay show={show} />
      </div>
    </SearchModalStyles>
  );
};

export default React.memo(SearchModal);
