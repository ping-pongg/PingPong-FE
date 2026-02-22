export type DateRange = {
  start: string
  end: string
}

export type ApiPage = {
  id: string
  url: string
  title: string
  date?: DateRange
  status: string
}

export type Page = ApiPage & {
  originalDate?: DateRange
}
