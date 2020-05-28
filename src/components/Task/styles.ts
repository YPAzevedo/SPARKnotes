import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  min-height: 50px;
  margin: 5px;
  padding: 10px;
  background: white;

  input {
    border: none;
    border-bottom: 1px solid #c3edea;
    margin-right: 8px;
    padding: 2px;
    flex: 1;
    transition: border-bottom 0.3s;

    &:focus {
      border-bottom: 1px solid #71d1ca;
    }
  }

  svg {
    margin: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
