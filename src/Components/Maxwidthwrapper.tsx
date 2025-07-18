import React, { ReactNode } from 'react'

export default function Maxwidthwrapper({children}:{
    children : ReactNode
}) {
  return (
    <div className='max-w-4xl mx-auto'>
        {children}
    </div>
  )
}
