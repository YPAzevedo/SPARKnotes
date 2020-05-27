import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import useColumnsProvider from "../../context/ColumnsProvider";

import Column from "../Column";

import { Container } from "./styles";

const ColumnsContainer: React.FC = () => {
  const { onDragEnd, columns, tasks } = useColumnsProvider();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {columns?.map((column) => {
          const taskList = column.taskIds.map((task) => {
            const taskIndex = tasks.findIndex((t) => t.id === task);
            if (taskIndex > -1) {
              return tasks[taskIndex];
            }
            return undefined;
          });

          return <Column key={column.id} column={column} tasks={taskList} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default ColumnsContainer;
