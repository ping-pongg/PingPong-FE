export const DAY_WIDTH = 80
export const BASE_DATE = new Date('2026-02-01')
export const NUM_DAYS = 30
export const TASK_COL_WIDTH = 224

export const addDays = (date: Date, days: number) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const formatDate = (date: Date) => date.toISOString().slice(0, 10)

export const formatHeaderDate = (date: Date) => {
  return `${date.getMonth() + 1}/${date.getDate()}`
}

export const getDayOffset = (dateStr: string) => {
  const date = new Date(dateStr)
  const diff = date.getTime() - BASE_DATE.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
