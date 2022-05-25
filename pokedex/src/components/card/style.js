import styled from "styled-components";

export const TopCard = styled.header`
  display: flex;
  justify-content: space-between;
  height: 20%;
  width: 100%;
`;
export const CardContain = styled.div`
  * {
    margin: 0px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  border-radius: 5px;
  border: 2px solid black;
  background: #ff373c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
export const ButtonsAlign = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 5%;
  button {
    text-shadow: 1px 1px pink, -1px -1px maroon;
    text-align: center;
    display: inline-block;
    width: 35px;
    height: 35px;
    -webkit-border-radius: 0.75em;
    -moz-border-radius: 0.75em;
    -o-border-radius: 0.75em;
    border-radius: 0.75em;
    background-color: red;
    -webkit-box-shadow: 0 0.2em maroon;
    -moz-box-shadow: 0 0.2em maroon;
    -o-box-shadow: 0 0.2em maroon;
    box-shadow: 0 0.2em maroon;
    color: red;
    background-color: red;
    background-image: -o-linear-gradient(
      left top,
      pink 3%,
      red 22%,
      maroon 99%
    );
    background-image: -moz-linear-gradient(
      left top,
      pink 3%,
      red 22%,
      maroon 99%
    );
    background-image: -webkit-linear-gradient(
      left top,
      pink 3%,
      red 22%,
      maroon 99%
    );
    background-image: linear-gradient(left top, pink 3%, red 22%, maroon 99%);
    cursor: pointer;
    padding-left: 5px;
  }
  svg {
    color: maroon;
  }
`;
export const ImageContain = styled.div`
  text-align: center;
  width: 90%;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  img {
    width: auto;
    height: 80px;
    border-radius: 5px;
  }
`;
export const BottomCard = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 15px;
  h5 {
    background-color: #00ffff;
    border: 2px solid white;
    height: 30px;
    text-align: center;
    line-height: 25px;
    text-transform: uppercase;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  &:hover {
    cursor: pointer;
  }
`;
