import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { AiOutlinePlusCircle } from "react-icons/ai";

import Task from "../Task";

import useColumnsProvider from "../../context/ColumnsProvider";

import { Container, Title, TaskList } from "./styles";

interface ColumnProps {
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };

  tasks: (
    | {
        id: string;
        text: string;
      }
    | undefined
  )[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  const { addTask } = useColumnsProvider();

  return (
    <Container>
      <Title>
        {column.title}
        <AiOutlinePlusCircle onClick={() => addTask(column.id, "hello")} />
      </Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task
                key={task?.id}
                id={task?.id}
                text={task?.text}
                index={index}
              />
            ))}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
