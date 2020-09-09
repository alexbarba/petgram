import React, { Suspense } from 'react'

import Loader from 'react-loader-spinner'

export const SuspenseLoader = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  )
}
