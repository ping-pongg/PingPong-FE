import axios from 'axios'

export function handleApiError(error: unknown) {
  if (axios.isAxiosError(error)) {
    // 서버가 응답을 준 경우 (4xx, 5xx)
    if (error.response) {
      const res = error.response.data
      return {
        status: error.response.status,
        message: res?.message ?? '알 수 없는 서버 오류가 발생했습니다.',
        code: res?.code,
      }
    }

    // 요청은 갔지만 응답이 없는 경우 (네트워크 에러)
    if (error.request) {
      return {
        status: null,
        message: '서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.',
      }
    }
  }

  // 그 외 일반 에러
  return {
    status: null,
    message: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
  }
}
