import styled from "styled-components";

export const DetailsIconsStyles = styled.div`
  .details-container {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    margin: 0;
    padding: 0;

    &--icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 20%;
      background-color: #ffde59;

      svg {
        fill: #656565;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
