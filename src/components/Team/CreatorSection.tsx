import Title from '@/components/common/Title'
import RoleIcon from '@/assets/profile.svg?react'
import ArrowIcon from '@/assets/down.svg?react'

interface CreatorSectionProps {
  value?: string
  onChange?: (value: string) => void
}

export default function CreatorSection({ value = '', onChange }: CreatorSectionProps) {
  return (
    <section className='rounded-xl border border-black/10 bg-white/60 px-6 py-8'>
      <Title size='md'>TEAM CREATOR</Title>

      <div className='mt-4 flex flex-col gap-4'>
        <div className='rounded-xl border border-black/10 bg-white/70 p-4 relative'>
          <div className='flex items-center gap-3 mb-2'>
            <RoleIcon className='w-6 h-6' />
            <span className='font-semibold text-sm'>Role</span>
          </div>

          <select
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className='w-full cursor-pointer rounded-md border border-black/10 px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-1 focus:ring-black/20 bg-white appearance-none'
          >
            <option value='' disabled>
              Select role
            </option>
            <option value='PM'>PM</option>
            <option value='QA'>QA</option>
            <option value='FRONTEND'>Frontend</option>
            <option value='BACKEND'>Backend</option>
          </select>

          <ArrowIcon className='w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none' />
        </div>
      </div>
    </section>
  )
}
