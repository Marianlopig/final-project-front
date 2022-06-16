import styled from "styled-components";

export const ParkminiStyles = styled.div`
  background-color: white;

  section {
    display: flex;
    justify-content: center;

    .card {
      display: inline-block;
      background-color: #ffffff;
      margin: 12px;
      padding: 8px;
      width: 156px;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      transition: 0.4s;
      height: 250px;
      :hover {
        .card-image {
          box-shadow: none;
        }
      }

      .card-image {
        width: 100%;
        height: 128px;
        border-radius: 8px;
        box-shadow: 8px 2px 12px 0 rgba(0, 0, 0, 0.2);
        transition: 0.4s;
        object-fit: cover;
        z-index: -1000;
      }

      .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
          color: #00c2cb;
          font-size: 13px;
          overflow: hidden;
          max-width: 150px;
        }
        p {
          overflow: hidden;
          width: 100%;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 10px;
          padding: 0px 0 20px 0;
        }
        span {
          font-size: 15px;
          margin-right: auto;
        }
      }

      .card-title {
        font-size: 16px;
        margin: 12px 0;
        transition: 0.4s;
        font-family: "Roboto";
        letter-spacing: 2px;
      }

      .card-content {
        font-size: 10px;
        margin-bottom: 4px;
      }

      .button-container {
        padding-top: 10px;
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
        }
      }
    }
  }
`;
