import styled from "styled-components";

interface ConteinerProps {
  type: string;
}

const getBackgroundColor = (type: string | undefined) => {
  switch (type?.toLowerCase()) {
    case "open":
      return "#e6fafa";
    case "in-progress":
      return "#fcfce8";
    case "done":
      return "#e8fcee";
    default:
      return "#faf2e6";
  }
};

export const Container = styled.div<ConteinerProps>`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  margin: 0 16px;
  overflow: auto;
  background: ${(props) => getBackgroundColor(props.type)};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #c3edea;
  background: white;

  div {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #c3edea;
    padding: 4px;

    span {
      margin: 0 4px;
    }
  }

  svg {
    cursor: pointer;
    font-size: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const AddTask = styled.form`
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid #c3edea;
  padding: 8px 16px;

  input {
    border: none;
    border-bottom: 1px solid #c3edea;
    margin-right: 8px;
    padding: 2px;
    flex: 1;
  }

  button {
    border: none;
    background: #c3edea;
    padding: 4px 8px;
    border: 1px solid #71d1ca;
    border-radius: 5px;
    margin: 0 8px;
  }

  svg {
    cursor: pointer;
    
    &:hover {
      opacity: 0.7,
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;
