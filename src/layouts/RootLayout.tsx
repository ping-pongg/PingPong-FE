import { Outlet } from 'react-router-dom'
import Header from '@/components/Layout/Header'

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className='pt-16'>
        <Outlet />
      </main>
    </>
  )
}
