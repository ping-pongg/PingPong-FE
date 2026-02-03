import InviteCard from './InviteCard'
import Title from '../common/Title'
import Plus from '@/assets/plus.svg?react'

const DUMMY_MEMBERS = [
  { id: 1, name: 'PARK SEEUN', email: 'seeun3139@sookmyung.ac.kr' },
  { id: 2, name: 'KIM MINJI', email: 'minji@sookmyung.ac.kr' },
  { id: 3, name: 'LEE JIWON', email: 'jiwon@sookmyung.ac.kr' },
  { id: 4, name: 'CHOI YUNA', email: 'yuna@sookmyung.ac.kr' },
  { id: 5, name: 'JUNG SOYEON', email: 'soyeon@sookmyung.ac.kr' },
  { id: 6, name: 'HAN JISU', email: 'jisu@sookmyung.ac.kr' },
]

export default function InviteSection() {
  return (
    <section>
      <Title size='lg' right={<Plus className='w-7 h-7 cursor-pointer' />}>
        ALL
      </Title>

      <div className='mt-6 grid grid-cols-3 gap-4'>
        {DUMMY_MEMBERS.map((member) => (
          <InviteCard key={member.id} name={member.name} email={member.email} />
        ))}
      </div>
    </section>
  )
}
