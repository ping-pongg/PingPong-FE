interface TitleProps {
  children: React.ReactNode
  right?: React.ReactNode
}

export default function Title({ children, right }: TitleProps) {
  return (
    <div className='flex flex-col justify-between mb-4 w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='text-base tracking-tight font-bold text-black'>{children}</h2>
        {right && <div>{right}</div>}
      </div>

      <div className='w-full h-px bg-black mt-3' />
    </div>
  )
}
