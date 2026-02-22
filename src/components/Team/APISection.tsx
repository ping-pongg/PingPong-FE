import { useNavigate, useLocation } from 'react-router-dom'
import Title from '../common/Title'
import Plus from '@/assets/plus.svg?react'

interface Props {
  role?: string
}

const ROLE_ROUTE: Record<string, string> = {
  PM: 'pm',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  QA: 'qa',
}

export default function APISection({ role }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    const subPath = ROLE_ROUTE[role ?? '']
    if (!subPath) return

    navigate(`${location.pathname}/${subPath}`)
  }

  return (
    <section>
      <Title size='lg' right={<Plus className='w-7 h-7 cursor-pointer' onClick={handleClick} />}>
        API
      </Title>
    </section>
  )
}
