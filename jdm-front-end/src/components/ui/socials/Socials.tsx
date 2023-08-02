import { InstagramLink, VkLink } from '@/constants/url.constants'
import Link from 'next/link'
import { FC } from 'react'
import {SlSocialVkontakte, SlSocialInstagram} from 'react-icons/sl'

const Socials: FC = () => {
  return (
    <div className='flex items-center'>
      <Link href={VkLink} target='_blank' className='mr-3'>
        <SlSocialVkontakte className='hover:text-primary transition-colors duration-200' size={25}/>
      </Link>
      <Link href={InstagramLink} target='_blank'>
        <SlSocialInstagram className='hover:text-primary transition-colors duration-200' size={25}/>
      </Link>
    </div>
  )
}

export default Socials;
