'use client'

import { EmailUrl, KrasnodarPhoneUrl, KrasnodarTelegramUrl, MoscowPhoneUrl, MoscowTelegramUrl } from '@/constants/url.constants'
import Container from '@/ui/Container'
import { FiPhoneCall } from 'react-icons/fi'

import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import Textarea from '@/ui/textarea/Textarea'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaTelegram } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { validEmail } from '../(customer)/auth/validate-email'
import { IContactForm } from './contact-form.interface'

const ContactForm = () => {

  const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IContactForm>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    
    console.log(data);

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      })
    })
  }

  return (
    <div className='py-10'>
      <Container>
        <div className='flex bg-white px-8 py-5 gap-8'>
          <div className='flex flex-col w-1/2'>
            <h2 className='capitalize font-semibold text-xl mb-5'>Contact us</h2>
            <p className='mb-5 text-sm'>You may contact us directly through any of the following or fill in the form on the side. We will be happy to answer any of your questions and respond as soon as we can.</p>
            <div className='text-sm'>
              <div className='py-4 border-t border-gray'>
                <Link href={EmailUrl} className='flex items-center'>
                  <TfiEmail size={19} className='mr-4'/>
                  <span>sales@jdmpower.ru</span>
                </Link>
              </div>
              <div className='flex py-4 border-t border-gray'>
                <div className='flex items-center border-r border-gray pr-4 mr-4'>
                  <FiPhoneCall size={19} className='mr-4'/><span className='mr-2'>Moscow:</span><a href={MoscowPhoneUrl}>+7 (919) 102-52-17</a>
                </div>
                <Link href={MoscowTelegramUrl} target='_blank'>
                  <FaTelegram className='hover:text-primary transition-colors duration-200' size={24}/>
                </Link>
              </div>
              <div className='flex py-4 border-t border-gray'>
                <div className='flex items-center border-r border-gray pr-4 mr-4'>
                  <FiPhoneCall size={19} className='mr-4'/><span className='mr-2'>Krasnodar:</span><a href={KrasnodarPhoneUrl}>+7 (928) 880-72-52</a>
                </div>
                <Link href={KrasnodarTelegramUrl} target='_blank'>
                  <FaTelegram className='hover:text-primary transition-colors duration-200' transition-colors duration-200 size={24}/>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-1/2'>
            <h3 className='capitalize font-semibold text-xl mb-5'>Contact form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
              {/* {isLoading ? (
                <Loader/>
              ) : ( */}
                <>
                  <Field
                    {...formRegister('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 3,
                        message: 'Not a valid name'
                      }
                    })}
                    type='name'
                    placeholder='Name'
                    title='Name*'
                    error={errors.name?.message}
                  />
                  <Field
                    {...formRegister('email', {
                      required: 'Email is required',
                      pattern: {
                        value: validEmail,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    placeholder='example@example.com'
                    title='Email*'
                    error={errors.email?.message}
                  />
                  <Field
                    {...formRegister('subject', {
                      required: 'Subject is required',
                      minLength: {
                        value: 6,
                        message: 'Not a valid subject'
                      }
                    })}
                    type='subject'
                    placeholder='Subject'
                    title='Subject*'
                    error={errors.subject?.message}
                  />
                  <Textarea
                    {...formRegister('message', {
                      required: 'Message is required'
                    })}
                    placeholder='Message'
                    title='Message*'
                    error={errors.message?.message}
                  />
                  <Button type='submit' variant='dark'>Send</Button>{' '}
                  {/* <div>
                      <button
                        type='button'
                        className='inline-block opacity-80 mt-3 text-sm'
                        onClick={() => setType(type === 'login' ? 'register' : 'login')}
                      >
                        {type === 'login' ? 'Register' : 'Login'}
                      </button>
                  </div> */}
                </>
              {/* // )} */}
            </form>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default ContactForm;
