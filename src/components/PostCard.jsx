import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({ $id, title, featuredImage }) {
  // console.log("File preview for:", title, appwriteService.getFilePreview(featuredImage).href);
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-slate-900 flex flex-col items-center justify-center rounded-xl p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg '>
        <div className='w-full flex items-center justify-center mb-4'>
          <img src={appwriteService.getFileView(featuredImage).href} alt={title}
            className='object-contain w-full h-[280px] md:h-[220px] ' />
        </div>
        <h2
          className='text-xl font-bold max-w-[280px] overflow-hidden whitespace-nowrap overflow-ellipsis'
        >{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
