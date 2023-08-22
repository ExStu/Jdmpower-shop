// import { reset as resetMainPage } from 'pages/MainPage/slice'
// import { reset as resetStepOne } from 'pages/FormPage/FormSteps/StepOne/slice'
// import { reset as resetStepTwo } from 'pages/FormPage/FormSteps/StepTwo/slice'
// import { reset as resetStepTree } from 'pages/FormPage/FormSteps/StepThree/slice'
// import { setCurrentStep, setModalIsOpen } from 'pages/FormPage/slice'
// import { useAppDispatch } from 'utils/hooks/useRedux'
// import { useNavigate } from 'react-router-dom'

import {reset as resetStepTwo} from '@/app/(customer)/checkout/FormSteps/StepTwo/slice'
import {reset as resetStepThree} from '@/app/(customer)/checkout/FormSteps/StepThree/slice'


import { setCurrentStep, setModalIsOpen } from '@/app/(customer)/checkout/slice'
import { useAppDispatch } from '../useRedux'

export const useFormSubmit = () => {
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()
  

  const resets = [resetStepTwo, resetStepThree]

  const closeModal = () => {
    dispatch(setModalIsOpen(false))
  }

  const onSuccess = () => {
    closeModal()
    // navigate('/', { replace: true })
    resets.forEach(reset => dispatch(reset()))
    dispatch(setCurrentStep(1))
  }

  const onFail = () => {
    closeModal()
  }

  return {
    onSuccess,
    onFail,
    closeModal
  }
}
