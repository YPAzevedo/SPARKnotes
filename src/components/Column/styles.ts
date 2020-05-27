import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  margin: 0 16px;
  overflow: auto;
  background: #e8fcee;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #c3edea;
  background: white;

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;
