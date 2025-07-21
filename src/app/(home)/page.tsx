import Herosection from '@/app/(home)/components/Herosection'
import React from 'react'
import Trust from './components/Trust'
import Booklist from './components/Booklist'
import { Books } from '@/utils/dummydata'


export default  function Home() {

  console.log(Books)
  return (
    <div>
      <Herosection/>
      <Trust/>
      <Booklist/>
    </div>
  )
}
