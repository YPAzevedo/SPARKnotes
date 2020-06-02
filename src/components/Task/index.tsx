import React, { useState, useRef, useEffect, FormEvent, memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TiTimes, TiEdit } from "react-icons/ti";

import useGlobalState from "context/GlobalStateProvider";

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
  const { dispatch } = useGlobalState();

  useEffect(() => {
    if (showEditTask) {
      inputRef?.current?.focus();
    }
  }, [showEditTask]);

  const handleEditTask = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "EDIT", taskId: id, newText: inputValue });
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
            <TiEdit onClick={() => setShowEditTask(!showEditTask)} />
            <TiTimes onClick={() => dispatch({ type: "REMOVE", taskId: id })} />
          </div>
        </Container>
      )}
    </Draggable>
  );
};

export default memo(Task);
