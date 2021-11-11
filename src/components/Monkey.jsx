import styled from "styled-components";

const Monkey = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: ${(props) => (props.id + 0.6) * 10 || "10"}%;
  z-index: ${(props) => 10 - props.id};

  .tip {
    display: none;
    width: 230px;
    padding: 15px 10px;
    color: green;
    background-color: #d5aa0e;
    border: 2px dashed green;
    outline: 4px solid #d5aa0e;
    border-radius: 6px;
    z-index: 100;
  }
  :hover {
    .tip {
      display: block;
    }
  }

  & .banana {
    animation: show-banana 3s 7s linear forwards;
    opacity: 0;

    filter: ${(props) =>
      props.accuracy < 2
        ? `invert(0%) sepia(51%) saturate(2878%) hue-rotate(0deg)
        brightness(104%) contrast(97%)`
        : props.accuracyDirection < 0
        ? `grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg)
            saturate(600%) contrast(0.8)`
        : `invert(80%) sepia(80%) saturate(288%) hue-rotate(346deg)
            brightness(30%) contrast(97%)`};
  }

  animation: go-monkey-${(props) => props.id} 6s 1 ${() => Math.random() + 1}s ease-in
      forwards,
    monkey-hop 0.5s 11 ${() => Math.random() + 1}s ease-in;
  ${(props) =>
    `@keyframes go-monkey-${props.id} {
    20% {
      right: ${(20 * props.taskstatus) / props.tasks}%;
    }
    40% {
      right: ${(40 * props.taskstatus) / props.tasks}%;
    }
    60% {
      right: ${(65 * props.taskstatus) / props.tasks}%;
    }
    80% {
      right: ${(72 * props.taskstatus) / props.tasks}%;
    }
    100% {
      right: ${(80 * props.taskstatus) / props.tasks}%;
      .banana {opacity: 1;}
    }}
    
    .progress {
      width: ${(10 * props.taskstatus) / props.tasks};
  
    }`}

  @keyframes monkey-hop {
    50% {
      transform: translate3d(-20px, -${() => (Math.random() + 1) * 100}px, 0);
    }
  }

  @keyframes show-banana {
    to {
      opacity: 1;
    }
  }
`;

export default Monkey;
