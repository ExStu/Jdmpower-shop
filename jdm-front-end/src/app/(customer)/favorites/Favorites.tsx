'use client'

import { useProfile } from '@/hooks/useProfile'
import Container from '@/ui/Container'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'

interface IFavorites {}

export default function Favorites({}: IFavorites) {
  const {profile} = useProfile()

  return (
    <div className='py-10'>
      <Container>
        <Catalog products={profile?.favorites || []}/>
      </Container>
    </div>
  )
}
