import type { ColumnDef } from '@tanstack/vue-table'
import type { Task } from '@/components/organisms/tasks/data/schema'
import { tasksService } from '@/services/tasks.service'

export function useTasks() {
  const data = useState<Task[]>('tasks:data', () => [])
  const columns = useState<ColumnDef<Task, unknown>[]>('tasks:columns', () => [])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchTasks = async () => {
    loading.value = true
    error.value = null
    try {
      const payload = await tasksService.getTasksPayload()
      data.value = payload.data
      columns.value = payload.columns
    }
    catch (err) {
      error.value = err instanceof Error ? err : new Error('Failed to load tasks')
    }
    finally {
      loading.value = false
    }
  }

  return { data, columns, loading, error, fetchTasks }
}
