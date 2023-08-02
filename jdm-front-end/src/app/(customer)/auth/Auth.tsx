'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from './validate-email'
import Loader from '@/ui/Loader'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
  useAuthRedirect()

  const {isLoading} = useAuth()

  const {login, register} = useActions()

  const [type, setType] = useState<'login' | 'register'>('login')

  const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === 'login') {
      login(data)
    } else {
      register(data)
    }

    reset()
  }

  return (
    <section className='flex h-screen'>

      <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg bg-white shadow-sm p-8 m-auto'>
        <Heading className='capitalize text-center mb-4'>{type}</Heading>

        {isLoading ? (
          <Loader/>
        ) : (
          <>
            <Field
              {...formRegister('email', {
                required: 'Email is required',
                pattern: {
                  value: validEmail,
                  message: 'Please enter a valid email address'
                }
              })}
              placeholder='example@example.com'
              title='Email'
              error={errors.email?.message}
            />
            <Field
              {...formRegister('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Not a valid password'
                }
              })}
              type='password'
              placeholder='Password'
              title='Password'
              error={errors.password?.message}
            />
            <Button type='submit' variant='dark'>Login</Button>{' '}
            <div>
                <button
                  type='button'
                  className='inline-block opacity-80 mt-3 text-sm'
                  onClick={() => setType(type === 'login' ? 'register' : 'login')}
                >
                  {type === 'login' ? 'Register' : 'Login'}
                </button>
            </div>
          </>
        )}
      </form>

    </section>
  )
}

export default Auth;
