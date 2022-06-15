import styled from "styled-components";

export const ParkStyles = styled.div`
  background-color: white;
  font-family: "Roboto", sans-serif;

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
      box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      transition: 0.4s;
      height: 550px;
      :hover {
        .card-image {
          transform: translateX(0px);
          box-shadow: none;
        }
      }

      .card-image {
        width: 100%;
        height: 256px;
        border-radius: 8px;
        transform: translateX(-32px);
        box-shadow: 16px 4px 24px 0 rgba(0, 0, 0, 0.2);
        transition: 0.4s;
        object-fit: cover;
        z-index: -1000;
      }

      .card-body {
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          color: #00c2cb;
          display: flex;
          justify-content: center;
          font-size: 25px;
          white-space: nowrap;
        }
        p {
          overflow: hidden;
          width: 100%;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 20px;
          padding: 0px 0 20px 0;
        }
        span {
          font-size: 15px;
          margin-right: auto;
        }
      }

      .card-title {
        font-size: 32px;
        margin: 12px 0;
        transition: 0.4s;
        font-family: "DM Serif Display", serif;
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

        .unsave {
          opacity: 50%;
          color: #00c2cb;
        }

        .button {
          width: 120px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: none;
          color: white;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;

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
            display: none;
          }

          @media screen and (max-width: 768px) {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            .desktop-button {
              display: none;
            }
            .mobile-button {
              display: flex;
            }
            .delete {
              fill: #00c2cb;
            }
          }
        }
      }
      .deletepark {
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
        color: #784545;
      }
    }
  }
`;
