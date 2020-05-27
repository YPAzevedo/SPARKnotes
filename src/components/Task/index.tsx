import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiOutlineClose } from "react-icons/ai"

import useColumnsContext from 'context/ColumnsProvider'

import { Container } from "./styles";

interface TaskProps {
  id: string | undefined;
  text: string | undefined;
  index: number;
}

const Task: React.FC<TaskProps> = ({ id, text, index }) => {
  const { removeTask } = useColumnsContext();

  return (
    <Draggable draggableId={id || "id"} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{text}</p>
          <AiOutlineClose onClick={() => removeTask(id)} />
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
