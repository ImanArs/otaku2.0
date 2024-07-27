import Favorites from '@/components/Favorites/Favorite'
import { Loading } from '@/shared/ui/loading'
import React, { Suspense } from 'react'

const Favorite = () => {
  return (
    // <Suspense fallback={<Loading />}>
      <Favorites />
    // </Suspense>
  )
}

export default Favorite