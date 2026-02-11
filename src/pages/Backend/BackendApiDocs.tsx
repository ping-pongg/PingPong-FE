import ApiAccordionItem from '@/components/api/ApiAccordionItem'

export default function BackendApiDocsPage() {
  return (
    <div className='flex flex-col gap-6 p-6'>
      <h1 className='text-2xl font-bold'>Frontend API Docs</h1>

      <ApiAccordionItem
        method='GET'
        path='/api/users'
        summary='유저 목록 조회'
        description='전체 유저를 조회합니다.'
        responses={[
          {
            status: 200,
            description: '성공 시 유저 목록 반환',
            example: [
              { id: 1, name: '세은' },
              { id: 2, name: '민수' },
            ],
          },
        ]}
      />

      {/* POST /api/users */}
      <ApiAccordionItem
        method='POST'
        path='/api/users'
        summary='유저 생성'
        description='새로운 유저를 생성합니다.'
        requestBody={{ name: '세은' }}
        responses={[
          {
            status: 201,
            description: '생성 성공',
            example: { id: 3, name: '세은' },
          },
        ]}
      />

      {/* DELETE /api/users/{id} */}
      <ApiAccordionItem
        method='DELETE'
        path='/api/users/{id}'
        summary='유저 삭제'
        description='삭제 시 복구 불가'
        params={[{ name: 'id', type: 'number', required: true, description: '삭제할 유저 ID' }]}
        responses={[
          { status: 204, description: '삭제 성공' },
          { status: 404, description: '유저를 찾을 수 없음' },
        ]}
      />
    </div>
  )
}
