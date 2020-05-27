import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Container, Text } from "./styles";

interface TaskProps {
  id: string | undefined;
  text: string | undefined;
  index: number;
}

const Task: React.FC<TaskProps> = ({ id, text, index }) => {
  return (
    <Draggable draggableId={id || "id"} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text>{text}</Text>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
