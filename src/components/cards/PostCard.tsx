'use client'

import React from 'react'
import { SmallProfileImage } from '@components/ui/loading-items'
import { useSession } from 'next-auth/react'
import { EllipsisVertical } from 'lucide-react'
import { TPostCard } from '@constants/Types'

const PostCard: React.FC<TPostCard> = ({ creator, postContent, postHeading }) => {

    const { data: session, status } = useSession()
    const { email, image, username } = creator;

  return (
    <div className='flex flex-col gap-3 bg-b-c p-3 hover:cursor-auto rounded-md'>
        <div className='flex-between gap-5'>
            <div className='flex-3'>
                <SmallProfileImage status={status} data={creator}/>
                <div>
                    <div className='flex flex-col sm:flex-row lg:items-center lg:gap-1'>
                        <h1 className='text-sm'>{username}</h1>
                        <p className='text-[10px]'>created a post</p>
                    </div>
                    <p className='text-[12px] -mt-1'>April 10.2028</p>
                </div>
            </div>
            <EllipsisVertical size={15} className='cursor-pointer'/>
        </div>
        <div className='flex-col-1'>
            <h1 className='font-bold text-lg'>{postHeading}</h1>
            <p>{postContent}</p>
        </div>
    </div>
  )
}

export default PostCard