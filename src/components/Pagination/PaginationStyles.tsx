import styled from "styled-components";

export const PaginationStyles = styled.div`
  .pager {
    background-color: #b2df28;
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
      width: 70px;
      height: 70px;
    }

    span {
      font-size: 24px;
    }
  }
`;
