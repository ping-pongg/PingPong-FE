import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import MainLayout from '@/layouts/MainLayout'
import TeamLayout from '@/layouts/TeamLayout'

import HomePage from '@/pages/Home'
import LoginPage from '@/pages/Auth/LoginPage'
import SignupPage from '@/pages/Auth/SignupPage'
import MyPage from '@/pages/Users/MyPage'

import TeamCreatePage from '@/pages/Team/TeamCreatePage'
import TeamDetailPage from '@/pages/Team/TeamDetailPage'

import BackendApiDocsPage from '@/pages/Backend/BackendApiDocs'
import BackendApiIntegrationPage from '@/pages/Backend/BackendApiIntegrationPage'
import FrontendApiDocsPage from '@/pages/Frontend/FrontendApiDocsPage'
import FrontendApiIntegrationPage from '@/pages/Frontend/FrontendApiIntegrationPage'
import PmPage from '@/pages/PM/PmPage'
import QaPage from '@/pages/QA/QaPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/signup', element: <SignupPage /> },
          { path: '/mypage', element: <MyPage /> },
          { path: '/team/create', element: <TeamCreatePage /> },
          { path: '/team/:teamId', element: <TeamDetailPage /> },
        ],
      },
      {
        path: '/team/:teamId',
        element: <TeamLayout />,
        children: [
          {
            path: 'backend',
            children: [
              { path: 'docs', element: <BackendApiDocsPage /> },
              { path: 'integration', element: <BackendApiIntegrationPage /> },
            ],
          },
          {
            path: 'frontend',
            children: [
              { path: 'docs', element: <FrontendApiDocsPage /> },
              { path: 'integration', element: <FrontendApiIntegrationPage /> },
            ],
          },
          { path: 'qa', element: <QaPage /> },
          { path: 'pm', element: <PmPage /> },
        ],
      },
    ],
  },
])
