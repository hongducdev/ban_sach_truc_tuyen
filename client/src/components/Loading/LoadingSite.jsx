import React, { Fragment } from 'react'
import Loading from './Loading'

const LoadingSite = () => {
  return (
    <Fragment>
      <div className="h-screen w-screen flex items-center justify-center">
        <Loading />
      </div>
    </Fragment>
  )
}

export default LoadingSite