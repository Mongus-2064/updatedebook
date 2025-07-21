import { Books } from '@/types'
import React from 'react'
import Bookcard from './Bookcard'

export default function Booklist({Books}: {Books : Books[]}) {
  console.log(Books)
  return (
    <div>
      {Books.map((b)=>(
       <Bookcard books={b} key={b.id} />
      ))}
    </div>
  )
}
