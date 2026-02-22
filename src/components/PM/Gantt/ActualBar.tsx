import { getDayOffset } from '@/utils/date'
import { DateRange } from '@/types/gantt'

export default function ActualBar({ date, DAY_WIDTH }: { date: DateRange; DAY_WIDTH: number }) {
  const startOffset = getDayOffset(date.start)
  const endOffset = getDayOffset(date.end)
  const duration = endOffset - startOffset + 1

  return (
    <div
      className='absolute h-8 rounded-sm bg-linear-to-r from-pink-300 to-fuchsia-400 shadow-sm z-10 pointer-events-none'
      style={{
        left: startOffset * DAY_WIDTH,
        width: duration * DAY_WIDTH,
      }}
    />
  )
}
