import RoleCard from '@/components/Home/RoleCard'
import Blue from '@/assets/puzzle_blue.svg?react'
import Yellow from '@/assets/puzzle_yellow.svg?react'
import Red from '@/assets/puzzle_red.svg?react'

export default function HomePage() {
  return (
    <main className='relative overflow-hidden bg-white'>
      <div className='absolute inset-0 bg-main-gradient' />

      <Blue className='pointer-events-none fixed -right-40 -top-70 z-0' />
      <Yellow className='pointer-events-none fixed -left-40 -bottom-30 z-0' />
      <Red className='pointer-events-none fixed -right-15 -bottom-40 z-0' />

      <section className='relative mx-auto max-w-6xl px-6 pt-10'>
        <h1 className='mb-20 text-left'>
          <span className='inline text-7xl font-extrabold tracking-tight font-Aquire'>API</span>{' '}
          <span className='inline text-7xl font-extrabold tracking-tight ml-5'> &</span>
          <span className='block text-7xl font-extrabold tracking-tight font-Aquire text-transparent [-webkit-text-stroke:2px_var(--color-gray-900)]'>
            DOCS
          </span>
        </h1>

        <div className='grid grid-cols-1 gap-[8vw] md:grid-cols-3'>
          <RoleCard title='BACKEND' description={`Start 'PINGPONG'\nas a back-end developer`} />
          <RoleCard title='FRONTEND' description={`Start 'PINGPONG'\nas a front-end developer`} />
          <RoleCard title='PM/QA' description={`Start 'PINGPONG'\nas a designer developer`} />
        </div>
      </section>
    </main>
  )
}
