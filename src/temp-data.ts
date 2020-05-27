export const initialData = {
  tasks: [
    {
      id: '@task:01',
      text: 'Take out the trash'
    },
    {
      id: '@task:02',
      text: 'Watch a movie'
    },
    {
      id: '@task:03',
      text: 'Study programming'
    },
    {
      id: '@task:04',
      text: 'Carge my phone'
    },
  ],
  columns: [
    {
      id: '@column:01',
      title: 'Open',
      taskIds:['@task:01','@task:04']
    },
    {
      id: '@column:02',
      title: 'in-Progress',
      taskIds:['@task:02','@task:03']
    },
    {
      id: '@column:03',
      title: 'Done',
      taskIds:[]
    },
  ],
  columnsOrder: ['@column:01','@column:02']
}