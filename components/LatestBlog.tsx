import { getLatestBlogs } from '@/sanity/queries';
import React from 'react'

const LatestBlog = async() => {
    const blogs = await getLatestBlogs();
  return (
    <div className='mb-10 lg:mb-20'>
      Latest blog
    </div>
  )
}

export default LatestBlog
