import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  a{
    text-decoration:none ;
  }
  button {
    border-radius: none;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
