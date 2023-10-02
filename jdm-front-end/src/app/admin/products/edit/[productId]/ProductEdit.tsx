'use client'

import { FC } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { IProductEditInput } from './product-edit.interface'
import { useProductEdit } from './useProductEdit'
import Field from '@/ui/input/Field'
import Container from '@/ui/Container'
import Button from '@/ui/button/Button'
import { TypeProductData } from '@/services/product/product.types'
import { useAdminManufactures } from './useAdminManufactures'
import { useAdminCategories } from './useAdminCategories'
import dynamic from 'next/dynamic'
import UploadField from '@/ui/admin/admin-upload/UploadField'

const DynamicSelect = dynamic(() => import('@/ui/admin/admin-select/AdminSelect'), {
  ssr: false
})

const ProductEdit: FC = () => {

  const {
    handleSubmit,
    register,
    formState: {errors},
    control,
    setValue,
  } = useForm<IProductEditInput> ({
    mode: 'onChange'
  })

  // const {fields, append, remove} = useFieldArray({
  //   control,
  //   name: 'images'
  // })

  const {onSubmit} = useProductEdit(setValue)
  const {data: manufactures, isLoading: isManufacturesLoading} = useAdminManufactures()
  const {data: categories, isLoading: isCategoriesLoading} = useAdminCategories()

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
        <Field
          {...register('sku', {
            required: 'Sku is required',
          })}
          placeholder='Sku'
          title='Sku'
          error={errors.sku?.message}
        />
        <Field
          {...register('price', {
            required: 'Price is required',
            valueAsNumber: true,
          })}
          type='number'
          placeholder='Price'
          title='Price'
          error={errors.price?.message}
        />
        {/* <Field
          {...register('inStock', {
            required: 'InStock is required',
          })}
          placeholder='InStock'
          error={errors.inStock?.message}
        /> */}
        {/* <Field
          {...register('discount', {
            required: 'Discount is required',
          })}
          placeholder='Discount'
          error={errors.discount?.message}
        /> */}
        <Field
          {...register('description', {
            required: 'Description is required',
          })}
          placeholder='Description'
          title='Description'
          error={errors.description?.message}
        />
        {/* <Field
          {...register('images', {
            required: 'Images is required',
            
          })}
          placeholder='Images'
          error={errors.images?.message}
          
        /> */}

        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({
            field: { value, onChange },
            fieldState: { error },
          }) => (
            <UploadField
              placeholder="Poster"
              error={error}
              folder="products"
              image={value}
              onChange={onChange}
            />
          )}
          rules={{
            required: 'Big poster is required!',
          }}
        />

        {/* <Controller
          name='images'
          control={control}
          rules={{
            required: 'At least 1 image'
          }}
          render={({field}) => (
            <Field
              {...field}
              placeholder='Image'
            />
          )}
        /> */}
        
        {/* {fields.map((field, index) => (
          <div key={field.id}>
            <Field
              // key={field.id}
              {...register(`images.${index}.image`)}
              placeholder='Images'
            />
            <Controller
              render={({field}) => <Field {...field} placeholder='image'/>}
              name={`images.${index}.image`}
              control={control}
            />
          </div>
            
        ))} */}

        {/* <Field
          {...register('categoryId', {
            required: 'CategoryId is required',
            valueAsNumber: true,
          })}
          type='number'
          placeholder='CategoryId'
          error={errors.categoryId?.message}
        /> */}
        <Controller
          name='manufactureId'
          control={control}
          render={({field, fieldState: {error}}) => (
            <DynamicSelect
              defaultValue={field.value}
              error={error}
              field={field}
              placeholder='Manufactures'
              options={manufactures || []}
              isLoading={isManufacturesLoading}

            />
          )}
        />
        {/* <Field
          {...register('manufactureId', {
            required: 'ManufactureId is required',
            valueAsNumber: true,
          })}
          type='number'
          placeholder='ManufactureId'
          error={errors.manufactureId?.message}
        /> */}
        <Controller
          name='categoryId'
          control={control}
          render={({field, fieldState: {error}}) => (
            <DynamicSelect
              defaultValue={field.value}
              error={error}
              field={field}
              placeholder='Categories'
              options={categories || []}
              isLoading={isCategoriesLoading}
              
            />
          )}
        />
        <Button variant='dark' type='submit'>Submit</Button>
      </form>
    </Container>
  )
}

export default ProductEdit;
