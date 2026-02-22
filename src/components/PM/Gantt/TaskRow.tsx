import { addDays, BASE_DATE, formatDate, TASK_COL_WIDTH } from '@/utils/date'
import { Page } from '@/types/gantt'
import PlannedBar from './PlannedBar'
import ActualBar from './ActualBar'

export default function TaskRow({
  page,
  isEditing,
  onChange,
  DAY_WIDTH,
}: {
  page: Page
  isEditing: boolean
  onChange: (page: Page) => void
  DAY_WIDTH: number
}) {
  const handleTrackMouseDown = (e: React.MouseEvent) => {
    if (!isEditing || page.date) return

    const trackElement = e.currentTarget as HTMLDivElement
    const trackRect = trackElement.getBoundingClientRect()

    const startX = e.clientX - trackRect.left
    const startDayOffset = Math.floor(startX / DAY_WIDTH)
    const startDate = addDays(BASE_DATE, startDayOffset)

    let currentStartStr = formatDate(startDate)
    let currentEndStr = formatDate(startDate)

    onChange({ ...page, date: { start: currentStartStr, end: currentEndStr } })

    const onMove = (moveEvent: MouseEvent) => {
      const currentX = moveEvent.clientX - trackRect.left
      const currentDayOffset = Math.floor(currentX / DAY_WIDTH)
      const currentDate = addDays(BASE_DATE, currentDayOffset)

      const minDate = startDate < currentDate ? startDate : currentDate
      const maxDate = startDate > currentDate ? startDate : currentDate

      currentStartStr = formatDate(minDate)
      currentEndStr = formatDate(maxDate)

      onChange({ ...page, date: { start: currentStartStr, end: currentEndStr } })
    }

    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  return (
    <div className='flex items-center h-16 relative hover:bg-gray-50/50 transition-colors'>
      <div
        className='text-base font-medium shrink-0 sticky left-0 bg-white z-50 flex flex-col pl-8 pr-8 justify-center border-r border-gray-100 h-full'
        style={{ width: TASK_COL_WIDTH }}
      >
        {isEditing ? (
          <input
            type='text'
            value={page.title}
            onChange={(e) => onChange({ ...page, title: e.target.value })}
            placeholder='태스크 이름 입력'
            className='w-full border border-gray-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-shadow'
          />
        ) : (
          <span className='truncate pr-2'>{page.title}</span>
        )}
      </div>

      <div
        className={`relative flex-1 h-full flex items-center ${
          isEditing && !page.date ? 'cursor-crosshair' : ''
        }`}
        onMouseDown={handleTrackMouseDown}
      >
        {page.originalDate && <ActualBar date={page.originalDate} DAY_WIDTH={DAY_WIDTH} />}
        {page.date && (
          <PlannedBar page={page} isEditing={isEditing} onChange={onChange} DAY_WIDTH={DAY_WIDTH} />
        )}
      </div>
    </div>
  )
}
