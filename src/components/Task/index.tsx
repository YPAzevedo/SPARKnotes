import useColumnsContext from "context/ColumnsProvider";
import React, { useState, useRef, useEffect, FormEvent } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

import { Container } from "./styles";

interface TaskProps {
  id: string | undefined;
  text: string | undefined;
  index: number;
}

const Task: React.FC<TaskProps> = ({ id, text, index }) => {
  const [inputValue, setinputValue] = useState(text);
  const [showEditTask, setShowEditTask] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { removeTask, editTask } = useColumnsContext();

  useEffect(() => {
    if (showEditTask) {
      inputRef?.current?.focus();
    }
  }, [showEditTask]);

  const handleEditTask = (e: FormEvent) => {
    e.preventDefault();
    editTask(id, inputValue);
    setShowEditTask(false);
  };

  return (
    <Draggable draggableId={id || "id"} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {showEditTask ? (
            <form onSubmit={handleEditTask}>
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
              />
            </form>
          ) : (
            <p>{text}</p>
          )}
          <div>
            <AiOutlineEdit onClick={() => setShowEditTask(!showEditTask)} />
            <AiOutlineClose onClick={() => removeTask(id)} />
          </div>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
