import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  min-height: 50px;
  margin: 5px;
  padding: 10px;
  background: white;

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.7
    }
  }
`;

