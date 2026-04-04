import type { ColumnDef } from '@tanstack/vue-table'
import type { Task } from '@/components/organisms/tasks/data/schema'
import { columns } from '@/components/organisms/tasks/components/columns'
import tasks from '@/components/organisms/tasks/data/tasks.json'

export interface TasksPayload {
  data: Task[]
  columns: ColumnDef<Task, unknown>[]
}

export const tasksService = {
  async getTasksPayload(): Promise<TasksPayload> {
    return {
      data: tasks.data as Task[],
      columns: columns as ColumnDef<Task, unknown>[],
    }
  },
}
