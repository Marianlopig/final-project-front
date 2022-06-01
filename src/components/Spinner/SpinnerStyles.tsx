import styled from "styled-components";

export const SpinnerStyles = styled.div`
  .metronome {
    --uib-size: 100px;
    --uib-speed: 1.6s;
    --uib-color: #ffde59;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--uib-size);
    width: var(--uib-size);
  }

  .metronome__dot {
    position: absolute;
    top: 13.5%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    animation: swing var(--uib-speed) linear infinite;
  }

  .metronome__dot::before {
    content: "";
    height: 25%;
    width: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  .metronome__dot:nth-child(1) {
    animation-delay: calc(var(--uib-speed) * -0.36);
  }

  .metronome__dot:nth-child(2) {
    animation-delay: calc(var(--uib-speed) * -0.27);
    opacity: 0.8;
  }

  .metronome__dot:nth-child(2)::before {
    transform: scale(0.9);
  }

  .metronome__dot:nth-child(3) {
    animation-delay: calc(var(--uib-speed) * -0.18);
    opacity: 0.6;
  }

  .metronome__dot:nth-child(3)::before {
    transform: scale(0.8);
  }

  .metronome__dot:nth-child(4) {
    animation-delay: calc(var(--uib-speed) * -0.09);
    opacity: 0.4;
  }

  .metronome__dot:nth-child(4)::before {
    transform: scale(0.7);
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }

    15% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    65% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .modal-main {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 300px;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`;
