'use client'

import { FC, useState } from 'react'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

import { useAdminProducts } from './useAdminProducts'
import Button from '@/ui/button/Button'
import { Modal } from 'antd'
import Container from '@/ui/Container'
import { useRouter } from 'next/navigation'

const Products: FC = () => {
	const { data, isFetching, createProduct, deleteProduct } = useAdminProducts()

  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

	return (
		<>
      <Container>
        <Heading className='mb-7'>Products</Heading>
        <Button onClick={createProduct} variant='dark'>Create</Button>
        <AdminList
          isLoading={isFetching}
          listItems={data}
          removeHandler={deleteProduct}
        />

        <Modal open={isOpen} onCancel={handleClose} footer={null}>
          <div>
            create product
          </div>
        </Modal>
      </Container>
		</>
	)
}

export default Products
