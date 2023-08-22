'use client'

import { useFormStep } from '@/hooks/checkout/useFormStep'
import { useAppSelector } from '@/hooks/useRedux'
import { getCurrentStep, getStepThreeState } from '@/store/selectors'
import { FormButtons } from '@/ui/formButtons/FormButtons'
import Field from '@/ui/input/Field'
import Textarea from '@/ui/textarea/Textarea'
import { FC } from 'react'
import { setIsDone, setValues } from './slice'
import { StepThreeValues } from './types'
import { Checkbox } from 'antd'


export const StepThree: FC = () => {

  const formStepState = useAppSelector(getStepThreeState)
  const currentStep = useAppSelector(getCurrentStep)

  const {form, previousStep, submitForm} = useFormStep<StepThreeValues>({
    formStepState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const {register: formRegister, handleSubmit, formState: {errors, isValid}} = form

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Checkbox>Delivery required</Checkbox>
      <Field
        {...formRegister('lastname')}
        type='lastname'
        placeholder='Lastname'
        title='Lastname (if delivery required)'
        // error={errors.town?.message}
      />
      <Field
        {...formRegister('surname')}
        type='surname'
        placeholder='Surname'
        title='Surname (if delivery required)'
        // error={errors.town?.message}
      />
      <Field
        {...formRegister('town')}
        type='town'
        placeholder='Town'
        title='Town (if delivery required)'
        // error={errors.town?.message}
      />
      <Field
        {...formRegister('address')}
        type='address'
        placeholder='Address'
        title='Address'
        // error={errors.town?.message}
      />
      <Textarea
        {...formRegister('comment')}
        // type='town'
        placeholder='Comment'
        title='Comment'
        // error={errors.town?.message}
      />
      <FormButtons isLastStep submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}

// export default StepThree;
