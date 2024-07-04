import NewsComponent from '@/components/News/NewsComponent';
import { Loading } from '@/shared/ui/loading';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NewsComponent />
    </Suspense>
  )
};

export default page;
