'use client'

import { useProfile } from '@/hooks/useProfile'
import Container from '@/ui/Container'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'
import TableHeaders from './TableHeaders'

interface IFavorites {}

export default function Favorites({}: IFavorites) {
  const {profile} = useProfile()

  const products = profile?.favorites

  console.log(products);

  return (
    <div className='py-10'>
      <Container>
        <TableHeaders/>
        <Catalog rowItem className='grid-cols-1 gap-y-0' products={profile?.favorites || []}/>
      </Container>
    </div>
  )
}
