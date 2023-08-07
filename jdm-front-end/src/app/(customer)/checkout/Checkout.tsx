'use client'

import Container from '@/ui/Container';
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ICheckoutForm } from './checkout.interface';
import Field from '@/ui/input/Field';
import { useCart } from '@/hooks/useCart';
import CartItem from '@/app/layout/header/cart/cart-item/CartItem';
import { convertPrice } from '@/utils/convertPrice';
// import styles from './Cart.module.scss'


const Checkout: FC = () => {

  const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<ICheckoutForm>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<ICheckoutForm> = (data) => {
    console.log(data);
  }

  const {items, total} = useCart()

  return (
    // <div>Checkout page</div>
    <div>
      <Container>
        <div className='flex'>
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
                  {...formRegister('surname', {
                    required: 'surname is required',
                    minLength: {
                      value: 6,
                      message: 'Not a valid surname'
                    }
                  })}
                  type='surname'
                  className='ml-3 w-1/2'
                  placeholder='Surname'
                  title='Surname*'
                  error={errors.surname?.message}
                />
              </div>
              <Field
                {...formRegister('phone', {
                  required: 'phone is required',
                  minLength: {
                    value: 6,
                    message: 'Not a valid phone'
                  }
                })}
                type='phone'
                placeholder='Phone'
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
                {...formRegister('street', {
                  required: 'street is required',
                  minLength: {
                    value: 6,
                    message: 'Not a valid street'
                  }
                })}
                type='street'
                placeholder='Street'
                title='Street*'
                error={errors.street?.message}
              />
              <Field
                {...formRegister('town', {
                  required: 'town is required',
                  minLength: {
                    value: 6,
                    message: 'Not a valid town'
                  }
                })}
                type='town'
                placeholder='Town'
                title='Town*'
                error={errors.town?.message}
              />
              <Field
                {...formRegister('state', {
                  required: 'state is required',
                  minLength: {
                    value: 6,
                    message: 'Not a valid state'
                  }
                })}
                type='state'
                placeholder='State'
                title='State*'
                error={errors.state?.message}
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
