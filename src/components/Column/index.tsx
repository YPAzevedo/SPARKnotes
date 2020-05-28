import useColumnsProvider from "context/ColumnsProvider";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import {
  AiOutlineClose,
  AiOutlinePlusCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";

import Task from "../Task";
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
  const { addTask } = useColumnsProvider();
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
      addTask(column.id, inputValue);
    }
    setInputValue("");
  };

  return (
    <Container type={column.title}>
      <Title>
        {column.title}
        <div>
          <span>{column.taskIds.length}</span> <AiOutlineUnorderedList />
        </div>
        <AiOutlinePlusCircle
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
          <AiOutlineClose onClick={() => setShowAddTask(false)} />
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

export default Column;
