'use client'

import { ICategory } from '@/types/category.interface'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useCategoryEdit } from './useCategoryEdit'
import Container from '@/ui/Container'
import Field from '@/ui/input/Field'
import Button from '@/ui/button/Button'

const CategoryEdit: FC = () => {

  const {
    handleSubmit,
    register,
    formState: {errors},
    control,
    setValue,
  } = useForm<ICategory> ({
    mode: 'onChange'
  })

  const {onSubmit} = useCategoryEdit(setValue)

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          {...register('name', {
            required: 'Name is required',
          })}
          placeholder='Name'
          title='Name'
          error={errors.name?.message}
        />
        <Button variant='dark' type='submit'>Submit</Button>
      </form>
    </Container>
  )
}

export default CategoryEdit;
