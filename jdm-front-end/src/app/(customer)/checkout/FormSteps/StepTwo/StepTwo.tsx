'use client'

import { Tips } from '@/constants/form.constants'
import { useFormStep } from '@/hooks/checkout/useFormStep'
import { usePhoneMask } from '@/hooks/checkout/usePhoneMask'
import { useAppSelector } from '@/hooks/useRedux'
import { getCurrentStep, getStepTwoState } from '@/store/selectors'
import { FormButtons } from '@/ui/formButtons/FormButtons'
import Field from '@/ui/input/Field'
import { FC } from 'react'
import { setIsDone, setValues } from './slice'
import { type StepTwoValues } from './types'


export const StepTwo: FC = () => {

  const formStepState = useAppSelector(getStepTwoState)
  const currentStep = useAppSelector(getCurrentStep)

  const {form, previousStep, nextStep} = useFormStep<StepTwoValues>({
    formStepState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const {register: formRegister, handleSubmit, formState: {errors, isValid}} = form

  const {onChange, onKeyDown} = usePhoneMask()

  return (
    <form onSubmit={handleSubmit(nextStep)}>
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
        {/* <Field
          {...formRegister('surname')}
          type='surname'
          className='ml-3 w-1/2'
          placeholder='Surname'
          title='Surname'
          // error={errors.surname?.message}
        /> */}
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
      <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}

// export default StepTwo;
