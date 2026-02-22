import { TASK_COL_WIDTH, addDays, formatHeaderDate, BASE_DATE } from '@/utils/date'

export default function GanttGridHeader({
  DAY_WIDTH,
  numDays,
}: {
  DAY_WIDTH: number
  numDays: number
}) {
  return (
    <div className='flex items-end sticky top-0 bg-white border-b border-gray-100 h-20'>
      <div
        className='shrink-0 sticky left-0 bg-white z-50 pl-8 pr-4 pb-4 font-bold text-lg border-r border-gray-100 flex items-end h-full'
        style={{ width: TASK_COL_WIDTH }}
      >
        Task
      </div>
      <div className='flex flex-1 pb-4 ml-3'>
        {[...Array(numDays)].map((_, i) => {
          const d = addDays(BASE_DATE, i)
          return (
            <div
              key={i}
              className='text-end font-bold text-gray-500 shrink-0 text-sm'
              style={{ width: DAY_WIDTH }}
            >
              {formatHeaderDate(d)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
