'use client'

import Container from '@/ui/Container';
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ICheckoutForm } from './checkout.interface';
import Field from '@/ui/input/Field';
import { useCart } from '@/hooks/useCart';
import CartItem from '@/app/layout/header/cart/cart-item/CartItem';
import { convertPrice } from '@/utils/convertPrice';
import Heading from '@/ui/Heading'
import { Tips } from '@/constants/form.constants'
import { usePhoneMask } from '@/hooks/usePhoneMask'
// import styles from './Cart.module.scss'


const Checkout: FC = () => {

  const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<ICheckoutForm>({
    mode: 'onChange'
  })

  const {onChange, onKeyDown} = usePhoneMask()

  const onSubmit: SubmitHandler<ICheckoutForm> = (data) => {
    console.log(data);
  }

  const {items, total} = useCart()

  return (
    // <div>Checkout page</div>
    <div className='py-10'>
      <Container>
        <Heading className='text-center mb-5'>Checkout</Heading>
        <div className='flex gap-x-5'>
          <div className='w-1/2'>
            {/* left side */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex items-center'>
                <Field
                  {...formRegister('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 6,
                      message: 'Not a valid name'
                    }
                  })}
                  type='name'
                  className='mr-3 w-1/2'
                  placeholder='Name'
                  title='Name*'
                  error={errors.name?.message}
                />
                <Field
                  {...formRegister('surname')}
                  type='surname'
                  className='ml-3 w-1/2'
                  placeholder='Surname'
                  title='Surname'
                  // error={errors.surname?.message}
                />
              </div>
              <Field
                {...formRegister('phone', {
                  required: Tips.REQUIRED,
                  validate: {
                    phone: value => value.replace(/\D/g, '').length >= 11 || Tips.PHONE
                  },
                  onChange
                })}
                onKeyDown={onKeyDown}
                type='tel'
                placeholder='+7 (999) 999-99-99'
                title='Phone*'
                error={errors.phone?.message}
              />
              <Field
                {...formRegister('email', {
                  required: 'email is required',
                  minLength: {
                    value: 6,
                    message: 'Not a valid email'
                  }
                })}
                type='email'
                placeholder='E-mail'
                title='E-mail*'
                error={errors.email?.message}
              />
              <Field
                {...formRegister('town')}
                type='town'
                placeholder='Town'
                title='Town (if delivery required)'
                // error={errors.town?.message}
              />
            </form>

          </div>
          <div className='w-1/2'>
            {/* right side */}
            <div className='mb-5'>
              {items.length ? items.map((item) => (
                <CartItem key={item.id} item={item}/>
              )) : (<div>Your cart is empty</div>)}
            </div>
            <div className='flex'>
              {/* footer */}
              <div>Total : </div>
              <div>{convertPrice(total)}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Checkout;
