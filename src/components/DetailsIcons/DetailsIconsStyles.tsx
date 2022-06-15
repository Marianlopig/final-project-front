import styled from "styled-components";

export const DetailsIconsStyles = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 10px;
  flex-grow: 1;
  height: 75px;
  .details-container {
    width: 100%;
    gap: 5px;
    margin: 0;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    overflow-y: hidden;
    &--icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
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
