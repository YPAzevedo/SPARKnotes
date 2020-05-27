import React, { createContext, useContext, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import { initialData } from "../temp-data";

interface ColumnData {
  id: string;
  title: string;
  taskIds: string[];
}

interface TaskData {
  id: string;
  text: string;
}

interface ColumnsProviderData {
  columns: ColumnData[];
  tasks: TaskData[];
  onDragEnd(result: DropResult): void;
  addTask(columnId: string, task: string): void;
}

const ColumnsContext = createContext<ColumnsProviderData>(
  {} as ColumnsProviderData
);

export const ColumnsProvider: React.FC = ({ children }) => {
  const [columns, setColumns] = useState(initialData.columns);
  const [tasks, setTasks] = useState(initialData.tasks);

  const addTask = (columnId: string, task: string) => {
    const newTask = { id: uuid(), text: task };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    const columnIndex = columns.findIndex((column) => column.id === columnId);
    const newColumn = columns[columnIndex];
    newColumn.taskIds = [...newColumn.taskIds, newTask.id];
    const newColumns = [...columns];
    console.log(columnIndex);
    console.log(">1", newColumns);
    newColumns.splice(columnIndex, 1);
    console.log(">2", newColumns);
    newColumns.splice(columnIndex, 0, newColumn);
    console.log(">3", newColumns);
    setColumns(newColumns);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    console.log(result);
    // if the draggable is dropped outside a droppable area
    if (!destination) {
      return;
    }
    // if the draggable is dropped on the same column and same index
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      const columnIndex = columns.findIndex(
        (column) => column.id === destination.droppableId
      );

      const column = columns[columnIndex];

      const newTaskIds = [...column.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumns = [...columns];
      newColumns[columnIndex].taskIds = newTaskIds;
      setColumns(newColumns);
    }

    if (destination.droppableId !== source.droppableId) {
      const sourceColumnIndex = columns.findIndex(
        (column) => column.id === source.droppableId
      );
      const destinationColumnIndex = columns.findIndex(
        (column) => column.id === destination.droppableId
      );

      const sourceColumn = columns[sourceColumnIndex];
      const destinationColumn = columns[destinationColumnIndex];
      console.log(sourceColumn, destinationColumn);

      const sourceColumnTaskIds = [...sourceColumn.taskIds];
      const destinationColumnTaskIds = [...destinationColumn.taskIds];
      sourceColumnTaskIds.splice(source.index, 1);
      destinationColumnTaskIds.splice(destination.index, 0, draggableId);

      const newColumns = [...columns];
      newColumns[sourceColumnIndex].taskIds = sourceColumnTaskIds;
      newColumns[destinationColumnIndex].taskIds = destinationColumnTaskIds;
      setColumns(newColumns);
    }
  };

  return (
    <ColumnsContext.Provider value={{ columns, tasks, onDragEnd, addTask }}>
      {children}
    </ColumnsContext.Provider>
  );
};

export default function useColumnsProvider() {
  const context = useContext(ColumnsContext);

  return context;
}
