import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media(max-width: 800px) {
    display: flex;
    flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 0 16px;
  }
`;
