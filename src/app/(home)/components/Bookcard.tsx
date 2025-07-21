import { Books } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function Bookcard({books}:{books : Books}) {
  return (
    <div>
        <div>
            <div>
                <Image src={books.imageLink} alt={books.title} width={24} height={24}/>
            </div>
            <div></div>
        </div>
    </div>
  )
}
