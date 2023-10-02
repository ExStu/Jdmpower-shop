'use client'

import CartItem from '@/app/layout/header/cart/cart-item/CartItem'
import { useFormStep } from '@/hooks/checkout/useFormStep'
import { useCart } from '@/hooks/useCart'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { getCurrentStep, getStepOneState } from '@/store/selectors'
import { FormButtons } from '@/ui/formButtons/FormButtons'
import { convertPrice } from '@/utils/convertPrice'
import { setIsDone, setValues } from './slice'
import { FC } from 'react'
import { StepOneValues } from './types'
import Catalog from '@/ui/catalog/Catalog'
import TableHeaders from './TableHeaders'

// interface IStepOne {
//   items: ICartItem[]
// }

export const StepOne: FC = () => {
  
  const {items, total, discountTotal} = useCart()
  const dispatch = useAppDispatch()
  console.log(items);
  // dispatch(setValues(items))
  const formStepState = useAppSelector(getStepOneState)
  const currentStep = useAppSelector(getCurrentStep)

  // console.log(formStepState);

  const {form, previousStep, nextStep} = useFormStep<StepOneValues>({
    formStepState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const {register: formRegister, handleSubmit, formState: {errors, isValid}} = form


  return (
    <form onSubmit={handleSubmit(nextStep)}>
      {/* right side */}
      {items.length && <TableHeaders/>}
      {/* <TableHeaders/> */}
      <div className='mb-5'>
        {items.length ? items.map((item) => (
          <CartItem {...formRegister('items')} full key={item.id} item={item}/>
        )) : (<div className='h-[35vh]'>Корзина пуста!</div>)}
      </div>

      <div className='flex'>
        {/* footer */}
        <p>{discountTotal > 0 ? 'Всего : ' : 'Итого : '}</p>
        <p>{convertPrice(total)}</p>
      </div>
      {discountTotal > 0 && (
        <>
          <div className='flex mb-5'>
            <p>Скидка&nbsp;:&nbsp;</p>
            <p className='text-primary'>{convertPrice(discountTotal)}</p>
          </div>
          <div className='flex'>
            <p>Итого&nbsp;:&nbsp;</p>
            <p>{convertPrice(total - discountTotal)}</p>
          </div>
        </>
      )}
      {items.length && <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>}
      
    </form>
  )
}

// export default StepOne;
