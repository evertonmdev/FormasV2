import React, { useContext } from 'react'
import { Context } from '../Context'

const AutoScrollArea = ({children}) => {
  const { AutoScrollRef } = useContext(Context)

  return (
    <div ref={AutoScrollRef} className="scrollContainer w-screen h-screen flex flex-nowrap  overflow-hidden ">
        {children}
    </div>
  )
}

export default AutoScrollArea