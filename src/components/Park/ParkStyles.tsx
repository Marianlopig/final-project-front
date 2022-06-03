import styled from "styled-components";

export const ParkStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400;500;600;700&display=swap");
  background-color: #f0f0f0;
  font-family: "Quicksand", sans-serif;
  padding: 32px;

  section {
    display: flex;
    justify-content: center;

    .card {
      display: inline-block;
      background-color: #ffffff;
      margin: 24px;
      padding: 16px;
      width: 312px;
      min-width: 288px;
      box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      transition: 0.4s;
      :hover {
        box-shadow: none;

        .card-image {
          transform: translateX(0px);
          box-shadow: none;
        }
      }

      .card-image {
        width: 100%;
        height: 256px;
        border-radius: 8px;
        position: relative;
        transform: translateX(-32px);
        box-shadow: 16px 4px 24px 0 rgba(0, 0, 0, 0.2);
        transition: 0.4s;
        object-fit: cover;
      }

      .card-body {
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          color: #00c2cb;
        }
        p {
          overflow: hidden;
          width: 100%;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          font-size: 20px;
        }
      }

      .card-title {
        font-size: 32px;
        margin: 12px 0;
        transition: 0.4s;
        font-family: "DM Serif Display", serif;
        font-weight: 600;
        letter-spacing: 2px;
      }

      .card-content {
        font-size: 14px;
        margin-bottom: 8px;
      }
      .button-container {
        padding-top: 40px;
        display: flex;
        justify-content: space-between;

        .button {
          width: 140px;
          height: 60px;
          border-radius: 12%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: none;
          &--info {
            background-color: #00c2cb;
          }
          &--favourite {
            background-color: #c9e265;
          }
          svg {
            fill: #fff;
            width: 38px;
            height: 38px;
          }
          @media screen and (max-width: 768px) {
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
