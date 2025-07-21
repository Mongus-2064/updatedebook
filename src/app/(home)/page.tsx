import Herosection from '@/app/(home)/components/Herosection'
import React from 'react'
import Trust from './components/Trust'
import Booklist from './components/Booklist'
import { Books } from '@/utils/dummydata'
import Featurebooks from './components/Featurebooks'


export default  function Home() {

  return (
    <div>
      <Herosection/>
      <Trust/>
      <Featurebooks/>
      <Booklist Books={Books} />
    </div>
  )
}
