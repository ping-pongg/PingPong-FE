import Title from '@/components/common/Title'
import RoleIcon from '@/assets/profile.svg?react'
import UserIcon from '@/assets/profile.svg?react'
import ArrowIcon from '@/assets/down.svg?react'

interface CreatorSectionProps {
  creatorName?: string
  role?: string
}

export default function CreatorSection({ creatorName, role }: CreatorSectionProps) {
  return (
    <section className='rounded-xl border border-black/10 bg-white/60 px-6 py-8'>
      <Title size='md'>TEAM CREATOR</Title>

      <div className='mt-4 flex flex-col gap-4'>
        <div className='rounded-xl border border-black/10 bg-white/70 p-4'>
          <div className='flex items-center gap-3 mb-2'>
            <UserIcon className='w-6 h-6' />
            <span className='font-semibold text-sm'>Creator Name</span>
          </div>

          <input
            placeholder='Enter your name'
            defaultValue={creatorName}
            className='
              w-full rounded-md border border-black/10
              px-3 py-2 text-sm
              outline-none
              focus:border-black/30 focus:ring-1 focus:ring-black/20
            '
          />
        </div>

        <div className='rounded-xl border border-black/10 bg-white/70 p-4 relative'>
          <div className='flex items-center gap-3 mb-2'>
            <RoleIcon className='w-6 h-6' />
            <span className='font-semibold text-sm'>Role</span>
          </div>

          <select
            defaultValue={role || ''}
            className='w-full cursor-pointer rounded-md border border-black/10 px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-1 focus:ring-black/20 bg-white appearance-none'
          >
            <option value='' disabled>
              Select role
            </option>
            <option value='admin'>PM</option>
            <option value='member'>QA</option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
          </select>

          <ArrowIcon className='w-4 h-4 absolute right-6 top-17 cursor-pointer -translate-y-1/2 pointer-events-none' />
        </div>
      </div>
    </section>
  )
}
