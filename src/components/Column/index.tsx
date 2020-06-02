import React, { MouseEvent, useEffect, useRef, useState, memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import {
  TiTimes,
  TiPlus,
  TiThList,
} from "react-icons/ti";

import useGlobalState from "context/GlobalStateProvider";
import Task from "components/Task";

import { AddTask, Container, TaskList, Title } from "./styles";

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
  const { dispatch } = useGlobalState();
  const [inputValue, setInputValue] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showAddTask) {
      inputRef.current?.focus();
    }
  }, [showAddTask]);

  const handleAddTask = (e: MouseEvent) => {
    e.preventDefault();

    if (!!inputValue) {
      dispatch({type: "ADD", columnId: column.id, taskText: inputValue});
    }
    setInputValue("");
  };

  return (
    <Container type={column.title}>
      <Title>
        <b>{column.title}</b>
        <div>
          <span>{column.taskIds.length}</span> <TiThList />
        </div>
        <TiPlus
          id="add-task"
          onClick={() => setShowAddTask(!showAddTask)}
        />
      </Title>
      {showAddTask && (
        <AddTask>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleAddTask(e)}>
            Add
          </button>
          <TiTimes id="remove-icon" onClick={() => setShowAddTask(false)} />
        </AddTask>
      )}
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

export default memo(Column);
