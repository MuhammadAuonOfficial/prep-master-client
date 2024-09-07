import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const TestApprovals = lazy(() => import('src/pages/dashboard/admin/test-approvals'));
const TeachersApprovals = lazy(() => import('src/pages/dashboard/admin/teacher-approvals'));
const CreateTestSeries = lazy(() => import('src/pages/dashboard/teacher/create-test-series'));
const TeacherTestSeries = lazy(() => import('src/pages/dashboard/teacher/test-series'));
const MyTestSeries = lazy(() => import('src/pages/dashboard/student/my-test-series'));
const StudentTestSeries = lazy(() => import('src/pages/dashboard/student/test-series'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      {
        path: 'admin',
        roles: [1],
        children: [
          {
            path: 'test-approvals',
            element: <test-approvals />,
          },
          {
            path: 'teacher-approvals',
            element: <TeachersApprovals />,
          },
        ],
      },
      {
        path: 'teacher',

        children: [
          {
            path: 'create-test-series',
            element: <CreateTestSeries />,
            roles: [2],
          },
          {
            path: 'test-series',
            element: <TeacherTestSeries />,
            roles: [2],
          },
        ],
      },
      {
        path: 'student',
        children: [
          {
            path: 'test-series',
            element: <StudentTestSeries />,
            roles: [3],
          },
          {
            path: 'my-test-series',
            element: <MyTestSeries />,
            roles: [3],
          },
        ],
      },
    ],
  },
];
