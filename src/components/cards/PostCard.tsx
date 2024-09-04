'use client'

import React from 'react'
import { SmallProfileImage } from '@components/ui/loading-items'
import { useSession } from 'next-auth/react'
import { EllipsisVertical } from 'lucide-react'

const PostCard = () => {

    const { data: session, status } = useSession()

  return (
    <div className='flex flex-col gap-3 bg-b-c p-3 hover:cursor-auto rounded-md'>
        <div className='flex-between gap-5'>
            <div className='flex-3'>
                <SmallProfileImage status={status} session={session}/>
                <div>
                    <div className='flex-1'>
                        <h1 className='text-sm'>{session?.user.name?.split(" ")[0]}</h1>
                        <p className='text-[10px]'>created a post</p>
                    </div>
                    <p className='text-[12px] -mt-1'>April 10.2028</p>
                </div>
            </div>
            <EllipsisVertical size={15} className='cursor-pointer'/>
        </div>
        <div className='flex-col-1'>
            <h1 className='font-bold text-lg'>Heading One big</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur consequatur commodi atque sit deserunt perspiciatis ratione eaque debitis voluptas ipsam!</p>
        </div>
    </div>
  )
}

export default PostCard