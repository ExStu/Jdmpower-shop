'use client'

import { useMemo, type FC } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { StepOne, StepTwo, StepThree } from './FormSteps'
// import { SuccessTooltip, FailTooltip } from 'components/'
// import { Box, ProgressBar } from 'components/ui'
// import { useAppSelector, useFormSubmit } from 'utils/hooks'

// import { getFormState } from 'store/selectors'
import { useFormSubmit } from '@/hooks/checkout/useFormSubmit'
import { useAppSelector } from '@/hooks/useRedux'
import { getFormState } from '@/store/selectors'
// import StepOne from './FormSteps/StepOne/StepOne'
// import StepTwo from './FormSteps/StepTwo/StepTwo'
// import StepThree from './FormSteps/StepThree/StepThree'
import { StepOne, StepTwo, StepThree } from './FormSteps'
import Container from '@/ui/Container'
import ProgressBar from '@/ui/progressBar/ProgressBar'
// import { Steps } from 'antd'


export const Checkout: FC = () => {
  const { currentStep, modalIsOpen, isSuccess } = useAppSelector(getFormState)
  const { closeModal, onSuccess, onFail } = useFormSubmit()
  // const navigate = useNavigate()

  const formSteps = useMemo(() => {
    return [StepOne, StepTwo, StepThree]
  }, [])

  // console.log(formSteps);

  // useEffect(() => {
  //   if (currentStep === 0) {
  //     navigate('/', { replace: true })
  //   }
  // }, [])

  return (
    <>
        <Container>
          <ProgressBar totalSteps={formSteps.length} currentStep={currentStep}/>
          {/* <Steps current={currentStep}/> */}
          {formSteps.map((FormStep, i) => (
            i + 1 === currentStep && <FormStep key={i}/>
          ))}
        </Container>
  
        {/* {isSuccess
          ? <SuccessTooltip
            title="Форма успешно отправлена"
            buttonText="На главную"
            isOpen={modalIsOpen}
            onAction={onSuccess}
          />
          : <FailTooltip
            title="Ошибка"
            isOpen={modalIsOpen}
            onClose={closeModal}
            onAction={onFail}
          />} */}
      </>

    // </Box>
  )
}
