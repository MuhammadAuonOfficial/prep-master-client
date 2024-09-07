import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';
import { CreateTestSeries } from 'src/sections/teacher/create-test-series';

// ----------------------------------------------------------------------

const metadata = { title: `Create Test Series - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CreateTestSeries />
    </>
  );
}
