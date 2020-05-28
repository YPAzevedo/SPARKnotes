import styled from "styled-components";

interface ConteinerProps {
  type: string;
}

const getBackgroundColor = (type: string | undefined) => {
  switch (type?.toLowerCase()) {
    case "open":
      return "#97d7f7";
    case "in-progress":
      return "#faf18c";
    case "done":
      return "#98fab2";
    default:
      return "#fab1f4";
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
  background: white;

  div {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid lightgray;
    padding: 4px;

    span {
      margin: 0 4px;
    }
  }

  #add-task {
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
  border-bottom: 1px solid lightgray;
  padding: 8px 16px;

  input {
    border: none;
    border-bottom: 1px solid lightgray;
    margin-right: 8px;
    padding: 2px;
    flex: 1;
    transition: border-bottom 0.3s;

    &:focus {
      border-bottom: 1px solid #222;
    }
  }

  button {
    border: none;
    background: white;
    border: 2px solid #222;
    padding: 4px 8px;
    border-radius: 5px;
    margin: 0 8px;
    font-weight: 500;
  }

  svg {
    cursor: pointer;
    font-size: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;
