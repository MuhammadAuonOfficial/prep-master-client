import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const navData = [
  {
    subheader: 'Admin',
    items: [
      {
        title: 'Test Approvals',
        path: paths.dashboard.admin.testApprovals,
      },
      {
        title: 'Teacher Approvals',
        path: paths.dashboard.admin.teacherApprovals,
      },
    ],
  },

  {
    subheader: 'Teacher',
    items: [
      { title: 'Create Test Series', path: paths.dashboard.teacher.createTestSeries },
      { title: 'Test Series', path: paths.dashboard.teacher.testSeries },
    ],
  },
  {
    subheader: 'Student',
    items: [
      {
        title: 'Test Series',
        path: paths.dashboard.student.testSeries,
      },
      {
        title: 'My Test Series',
        path: paths.dashboard.student.myTestSeries,
      },
    ],
  },
];
