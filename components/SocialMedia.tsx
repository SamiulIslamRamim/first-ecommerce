import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props{
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {title: "Facebook",
  href: "https://www.facebook.com/",
  icon: <FacebookIcon className='w-5 h-5'/>},
  
  {title: "Youtube",
  href: "https://www.youtube.com/",
  icon: <YouTubeIcon className='w-5 h-5'/>},


  {title: "Linkedin",
  href: "https://www.linkedin.com/",
  icon: <LinkedInIcon className='w-5 h-5'/>},

  {title: "Github",
  href: "https://github.com/SamiulIslamRamim",
  icon: <GitHubIcon className='w-5 h-5'/>},
]


const SocialMedia = ({className, iconClassName, tooltipClassName}: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center justify-around", className)}>
        {socialLink?.map((item) => (
          <Tooltip key= {item?.title}>
            <TooltipTrigger >
            <Link key= {item?.title}href={item?.href} target="_blank" rel="noopener noreferrer" className={cn('inline-flex p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect', iconClassName)}>
              {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
