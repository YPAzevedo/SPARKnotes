import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Column from "components/Column";
import useGlobalState from "context/GlobalStateProvider";

import { Container } from "./styles";

const ColumnsContainer: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  return (
    <DragDropContext onDragEnd={(result) => dispatch({type: "DRAG-END", result})}>
      <Container>
        {state.columns.map((column) => {
          const taskList = column.taskIds.map((task) => {
            const taskIndex = state.tasks.findIndex((t) => t.id === task);
            if (taskIndex > -1) {
              return state.tasks[taskIndex];
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
