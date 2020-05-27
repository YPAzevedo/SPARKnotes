import { uuid } from 'uuidv4'

export const COLUMNS = [
  {
    id: uuid(),
    title: "Open",
    taskIds:[]
  },
  {
    id: uuid(),
    title: "In-Progress",
    taskIds:[]
  },
  {
    id: uuid(),
    title:  "Done",
    taskIds:[]
  },
]