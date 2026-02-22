import { useEffect, useState, useRef } from 'react'
import Plus from '@/assets/plus.svg?react'
import GanttHeader from './GanttHeader'
import GanttGridHeader from './GanttGridHeader'
import GridLines from './GridLines'
import TaskRow from './TaskRow'
import { Page } from '@/types/gantt'
import { DAY_WIDTH, NUM_DAYS, TASK_COL_WIDTH } from '@/utils/date'
import { GanttScrollProvider } from '@/hook/useGanttScroll'

export default function GanttChart() {
  const [pages, setPages] = useState<Page[]>([])
  const [isEditing, setIsEditing] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchTasks = async () => {
      const mockResponse = {
        code: 1,
        message: '성공하였습니다.',
        result: {
          databaseTitle: 'Project PingPong',
          pages: [
            {
              id: '1',
              url: '',
              title: '기능 정리하기',
              date: { start: '2026-02-01', end: '2026-02-04' },
              status: 'DONE',
            },
            {
              id: '2',
              url: '',
              title: '로그인 기능 구현',
              date: { start: '2026-02-02', end: '2026-02-06' },
              status: 'IN_PROGRESS',
            },
          ],
        },
        success: true,
      }

      const initializedPages = mockResponse.result.pages.map((page) => ({
        ...page,
        originalDate: page.date,
      }))
      setPages(initializedPages)
    }

    fetchTasks()
  }, [])

  const handleUpdateTask = async (updatedPage: Page) => {
    setPages((prev) => prev.map((p) => (p.id === updatedPage.id ? updatedPage : p)))

    const payload = {
      title: updatedPage.title,
      date: updatedPage.date,
      status: updatedPage.status,
    }
    console.log('PATCH /api/tasks', payload)
  }

  const handleAddTask = () => {
    const newTask: Page = {
      id: Date.now().toString(),
      url: '',
      title: '',
      status: 'TODO',
    }
    setPages([...pages, newTask])
  }

  return (
    <div className='pb-20 relative overflow-hidden'>
      <main className='px-10 max-w-7xl mx-auto mt-12 relative z-10'>
        <GanttHeader isEditing={isEditing} onToggleEdit={() => setIsEditing(!isEditing)} />

        <div className='bg-white rounded-3xl shadow-xl overflow-hidden min-w-[80%] border border-gray-100'>
          <GanttScrollProvider value={scrollRef}>
            <div ref={scrollRef} className='overflow-x-auto scrollbar-hide w-full'>
              <div className='min-w-max relative'>
                <TodayMarker DAY_WIDTH={DAY_WIDTH} offset={9} />
                <GanttGridHeader DAY_WIDTH={DAY_WIDTH} numDays={NUM_DAYS} />

                <div className='relative'>
                  <GridLines DAY_WIDTH={DAY_WIDTH} numDays={NUM_DAYS} />

                  <div className='relative z-40'>
                    {pages.map((page) => (
                      <TaskRow
                        key={page.id}
                        page={page}
                        isEditing={isEditing}
                        onChange={handleUpdateTask}
                        DAY_WIDTH={DAY_WIDTH}
                      />
                    ))}

                    {isEditing && (
                      <div
                        className='h-20 pb-4 shrink-0 sticky left-0 bg-white z-30 flex items-center justify-center border-r border-gray-100'
                        style={{ width: TASK_COL_WIDTH }}
                      >
                        <Plus
                          onClick={handleAddTask}
                          className='w-8 h-8 rounded-full text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform'
                        ></Plus>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </GanttScrollProvider>
        </div>
      </main>
    </div>
  )
}

function TodayMarker({ DAY_WIDTH, offset }: { DAY_WIDTH: number; offset: number }) {
  return (
    <div
      className='absolute z-20 top-0 bottom-0 pointer-events-none flex flex-col items-center'
      style={{
        left: TASK_COL_WIDTH + offset * DAY_WIDTH,
        transform: 'translateX(-50%)',
      }}
    >
      <div className='bg-api-green text-white text-xs px-3 py-1 rounded-full shadow-sm mt-2 mb-1'>
        Today
      </div>
      <svg className='w-4 h-4 text-api-green mb-1' fill='currentColor' viewBox='0 0 20 20'>
        <path
          fillRule='evenodd'
          d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
      <div className='flex-1 border-l-2 border-dashed border-api-green' />
    </div>
  )
}
