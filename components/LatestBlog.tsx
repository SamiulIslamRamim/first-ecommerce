import { getLatestBlogs } from '@/sanity/queries';
import React from 'react'
import { Title } from './ui/text';
import { Blog } from '@/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const LatestBlog = async() => {
    const blogs: Blog[] = await getLatestBlogs();
  return (
    <div className='mb-10 lg:mb-20'>
      <Title>Latest blog</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
        {blogs?.map((blog)=>(
         <div key={blog?._id}> 
         {blog?.mainImage && (
          <Link
          href={`/blog/${blog?.slug?.current}`}>
          <Image 
          src={urlFor(blog?.mainImage).url()}
          alt='blog banner'
          width={500}
          height={500}
          className='w-full max-h-80 object-cover'
          />
          </Link>
         )}
         <div className='bg-shop_light_bg p-5'>
          <div className='text-xs flex items-center gap-5'>
            <div className='flex items-center relative group cursor-pointer'>
              {blog?.blogcategories?.map((item, index)=> (
                <p key={index} className='font-semibold text-shop_dark_green tracking-wide'> {item?.title}</p>
              ))}
            </div>
          </div>
         </div>
          </div>
      ))}</div>
    </div>
  )
}

export default LatestBlog
