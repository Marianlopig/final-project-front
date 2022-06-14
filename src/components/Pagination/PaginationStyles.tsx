import styled from "styled-components";

export const PaginationStyles = styled.div`
  display: flex;
  width: 100%;
  background-color: #c9e265;

  .pager {
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .icon-container {
      background: none;
      border: none;
      :active {
        color: #fff;
      }
    }

    svg {
      color: #00c2cb;
      width: 70px;
      height: 70px;
    }

    span {
      font-size: 24px;
    }
  }
`;
