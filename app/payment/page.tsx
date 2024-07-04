import Payment from '@/components/payment/Payment';
import { Loading } from '@/shared/ui/loading';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Payment />
    </Suspense>
  )
};

export default page;
