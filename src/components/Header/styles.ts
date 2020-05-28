import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 9px 1px lightgrey;
  padding: 0 16px;
  height: 60px;

  div {
    display: flex;
    align-items: baseline;

    #logo {
      margin-right: 4px;
    }

    #title {
      font-weight: 100;
    }
  }
`;
