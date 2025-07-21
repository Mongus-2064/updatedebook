import { Books } from '@/types'
import React from 'react'
import Bookcard from './Bookcard'
import Maxwidthwrapper from '@/Components/Maxwidthwrapper'

export default function Booklist({Books}: {Books : Books[]}) {
  return (
    <Maxwidthwrapper>
      <div className='grid md:grid-cols-2  grid-cols-1 gap-4'>
      {Books.map((b)=>(
       <Bookcard books={b} key={b.id} />
      ))}
    </div>
    </Maxwidthwrapper>
    
  )
}
