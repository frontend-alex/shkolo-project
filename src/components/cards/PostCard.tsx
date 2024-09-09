'use client'

import React from 'react'
import { SmallProfileImage } from '@components/ui/loading-items'
import { useSession } from 'next-auth/react'
import { EllipsisVertical } from 'lucide-react'
import { TPostCard } from '@constants/Types'

import { format } from 'date-fns'

const PostCard: React.FC<TPostCard> = ({ creator, postContent, postHeading, createdAt }) => {

    const { status } = useSession()
    const { username } = creator[0];

    const formatedDate = format(new Date(createdAt), 'MMMM dd, yyyy hh:mm a')

  return (
    <div className='flex flex-col gap-3 bg-b-c p-3 hover:cursor-auto rounded-md z-[1]'>
        <div className='flex-between gap-5'>
            <div className='flex-3'>
                <SmallProfileImage status={status} data={creator}/>
                <div>
                    <div className='flex flex-col sm:flex-row lg:items-center lg:gap-1'>
                        <h1 className='text-sm'>{username}</h1>
                        <p className='text-[10px]'>created a post</p>
                    </div>
                    <p className='text-[12px] -mt-1'>{formatedDate}</p>
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