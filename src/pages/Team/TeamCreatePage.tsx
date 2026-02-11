import TeamTitle from '@/components/Team/TeamTitle'
import CreatorSection from '@/components/Team/CreatorSection'
import LinkSection from '@/components/Team/LinkSection'
import NotionSection from '@/components/Team/NotionSection'
import Button from '@/components/common/Button'

export default function TeamCreatePage() {
  return (
    <main className='mx-auto max-w-250 px-6 py-30'>
      <TeamTitle />

      <div className='mt-12 space-y-16'>
        <CreatorSection />
        <LinkSection />
        <NotionSection />
      </div>

      <div className='mt-20 flex justify-center'>
        <Button variant='primary'>CREATE</Button>
      </div>
    </main>
  )
}
