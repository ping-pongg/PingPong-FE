import { useState } from 'react'
import Open from '@/assets/up.svg?react'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const METHOD_STYLE: Record<HttpMethod, { bg: string; border: string; text: string }> = {
  GET: { bg: 'bg-api-blue-sub', border: 'border-api-blue', text: 'text-api-blue' },
  POST: { bg: 'bg-api-green-sub', border: 'border-api-green', text: 'text-api-green' },
  PUT: { bg: 'bg-api-yellow-sub', border: 'border-api-yellow', text: 'text-api-yellow' },
  DELETE: { bg: 'bg-api-red-sub', border: 'border-api-red', text: 'text-api-red' },
}

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[]
interface JsonObject {
  [key: string]: JsonValue
}

interface ApiParam {
  name: string
  type: string
  required?: boolean
  description?: string
}

interface ApiResponse {
  status: number
  description: string
  example?: JsonValue
}

interface Props {
  method: HttpMethod
  path: string
  summary?: string
  description?: string
  params?: ApiParam[]
  requestBody?: JsonValue
  responses?: ApiResponse[]
}

function Section({
  title,
  children,
  method,
}: {
  title: string
  children: React.ReactNode
  method: string
}) {
  return (
    <div className='space-y-2'>
      <h4
        className={`text-sm px-4 py-4 bg-white border-t border-b ${METHOD_STYLE[method].border}  tracking-wider text-black`}
      >
        {title}
      </h4>
      <div className='px-4 py-4'>{children}</div>
    </div>
  )
}

function ApiTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className='overflow-hidden rounded border border-gray-200 bg-white'>
      <table className='w-full border-collapse text-sm'>
        <thead className='bg-gray-100'>
          <tr>
            {headers.map((h) => (
              <th key={h} className='border-b px-3 py-2 text-left font-semibold text-gray-600'>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className='odd:bg-white even:bg-gray-50'>
              {row.map((cell, j) => (
                <td key={j} className='border-b px-3 py-2 text-gray-700'>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CodeBlock({ data }: { data: JsonValue }) {
  return (
    <pre className='overflow-auto rounded-md bg-[#0f172a] p-3 text-xs text-slate-100'>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  )
}

export default function ApiAccordionItem({
  method,
  path,
  summary,
  description,
  params,
  requestBody,
  responses,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`overflow-hidden rounded-md border ${METHOD_STYLE[method].border}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center gap-3 px-2 py-2 text-left ${METHOD_STYLE[method].bg}`}
      >
        <span
          className={`min-w-16 rounded px-2 py-1.75 text-center text-xs font-semibold text-white
            ${METHOD_STYLE[method].border.replace('border', 'bg')}`}
        >
          {method}
        </span>

        <span className='text-sm font-medium text-gray-900'>{path}</span>
        {summary && <span className='text-sm text-gray-600'>{summary}</span>}

        <span className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`}>
          <Open className={`${METHOD_STYLE[method].text} w-6 h-6`} />
        </span>
      </button>

      {open && (
        <div
          className={`space-y-6 border-t ${METHOD_STYLE[method].border} ${METHOD_STYLE[method].bg} text-sm`}
        >
          {description && <p className='px-4 py-4 text-gray-500'>{description}</p>}

          {params && params.length > 0 && (
            <Section title='Parameters' method={method}>
              <ApiTable
                headers={['Name', 'Type', 'Required', 'Description']}
                rows={params.map((p) => [
                  p.name,
                  p.type,
                  p.required ? 'Yes' : 'No',
                  p.description ?? '-',
                ])}
              />
            </Section>
          )}

          {requestBody && (
            <Section title='Request Body' method={method}>
              <CodeBlock data={requestBody} />
            </Section>
          )}

          {responses && responses.length > 0 && (
            <Section title='Responses' method={method}>
              {responses.map((res) => (
                <div key={res.status} className='space-y-2'>
                  <div className='font-semibold text-gray-700'>{res.status}</div>
                  <div className='text-gray-600'>{res.description}</div>
                  {res.example && <CodeBlock data={res.example} />}
                </div>
              ))}
            </Section>
          )}
        </div>
      )}
    </div>
  )
}
