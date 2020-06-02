import { uuid } from "uuidv4";

interface ColumnData {
  id: string;
  title: string;
  taskIds: string[];
}

interface TaskData {
  id: string;
  text: string;
}

export const stateReducer = (
  state: { columns: ColumnData[]; tasks: TaskData[] },
  action: any
): any => {
  switch (action.type) {
    case "ADD": {
      const newTask = { id: uuid(), text: action.taskText };
      const newTasks = [...state.tasks, newTask];
      const newColumns = state.columns.map((column: ColumnData) => ({
        ...column,
        taskIds:
          column.id === action.columnId
            ? [...column.taskIds, newTask.id]
            : column.taskIds,
      }));
      return { columns: newColumns, tasks: newTasks };
    }
    case "EDIT": {
      if (!action.newText) return;
      const newTasks = state.tasks.map((task: TaskData) => {
        if (task.id === action.taskId) {
          return { ...task, text: action.newText };
        }
        return task;
      });
      return { columns: state.columns, tasks: newTasks };
    }
    case "REMOVE": {
      const newColumns = state.columns.map((column: ColumnData) => ({
        ...column,
        taskIds: column.taskIds.filter((task) => task !== action.taskId),
      }));
      const newTasks = state.tasks.filter(
        (task: TaskData) => task.id !== action.taskId
      );
      return { columns: newColumns, tasks: newTasks };
    }
    case "DRAG-END":
      {
        const { source, destination, draggableId } = action.result;
        // if the draggable is dropped outside a droppable area
        if (!destination) {
          return state;
        }
        // if the draggable is dropped on the same column and same index
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return state;
        }

        if (destination.droppableId === source.droppableId) {
          const columnIndex = state.columns.findIndex(
            (column: ColumnData) => column.id === destination.droppableId
          );

          const column = state.columns[columnIndex];

          const newTaskIds = [...column.taskIds];
          newTaskIds.splice(source.index, 1);
          newTaskIds.splice(destination.index, 0, draggableId);

          const newColumns = [...state.columns];
          newColumns[columnIndex].taskIds = newTaskIds;
          return { columns: newColumns, tasks: state.tasks };
        }

        if (destination.droppableId !== source.droppableId) {
          const sourceColumnIndex = state.columns.findIndex(
            (column: ColumnData) => column.id === source.droppableId
          );
          const destinationColumnIndex = state.columns.findIndex(
            (column: ColumnData) => column.id === destination.droppableId
          );

          const sourceColumn = state.columns[sourceColumnIndex];
          const destinationColumn = state.columns[destinationColumnIndex];

          const sourceColumnTaskIds = [...sourceColumn.taskIds];
          const destinationColumnTaskIds = [...destinationColumn.taskIds];
          sourceColumnTaskIds.splice(source.index, 1);
          destinationColumnTaskIds.splice(destination.index, 0, draggableId);

          const newColumns = [...state.columns];
          newColumns[sourceColumnIndex].taskIds = sourceColumnTaskIds;
          newColumns[destinationColumnIndex].taskIds = destinationColumnTaskIds;
          return { columns: newColumns, tasks: state.tasks };
        }
      }
      break;
    default:
      return state;
  }
};
