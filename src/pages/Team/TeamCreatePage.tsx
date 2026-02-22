import { useState } from 'react'
import useApi from '@/hook/useApi'
import { createTeam } from '@/api/team'
import { CreateTeamRequest } from '@/types/team'
import { useNavigate } from 'react-router-dom'
import TeamTitle from '@/components/Team/TeamTitle'
import CreatorSection from '@/components/Team/CreatorSection'
import LinkSection from '@/components/Team/LinkSection'
import NotionSection from '@/components/Team/NotionSection'
import Button from '@/components/common/Button'

export default function TeamCreatePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState<CreateTeamRequest>({
    name: '',
    notion: '',
    figma: '',
    discord: '',
    swagger: '',
    github: '',
    creatorRole: '',
  })

  const { execute, loading, error } = useApi(createTeam)

  const handleChange = (key: keyof CreateTeamRequest, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      await execute(form)
      navigate('/mypage')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='mx-auto max-w-250 px-6 py-30'>
      <TeamTitle value={form.name} onChange={(value) => handleChange('name', value)} />

      <div className='mt-12 space-y-16'>
        <CreatorSection
          value={form.creatorRole}
          onChange={(value) => handleChange('creatorRole', value)}
        />

        <LinkSection
          figma={form.figma}
          discord={form.discord}
          swagger={form.swagger}
          github={form.github}
          onChange={handleChange}
        />

        <NotionSection />
      </div>

      {error && <p className='text-red-500 mt-4 text-center'>팀 생성 중 오류가 발생했습니다.</p>}

      <div className='mt-20 flex justify-center'>
        <Button variant='primary' onClick={handleSubmit} disabled={loading}>
          {loading ? 'CREATING...' : 'CREATE'}
        </Button>
      </div>
    </main>
  )
}
