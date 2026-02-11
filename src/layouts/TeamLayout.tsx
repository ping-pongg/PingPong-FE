import { Outlet } from 'react-router-dom'

export default function TeamLayout() {
  return (
    <div className='flex'>
      {/* 탭 / 사이드바 */}
      <aside>{/* Backend / Frontend / QA / PM */}</aside>

      {/* 실제 페이지 */}
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  )
}
