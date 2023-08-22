import { StepOneValues } from './FormSteps/StepOne/types'
import { StepTwoValues } from './FormSteps/StepTwo/types'
import { StepThreeValues } from './FormSteps/StepThree/types'

export interface FormPageState {
  currentStep: number
  modalIsOpen: boolean
  isSuccess: boolean
  isLoading: boolean
}

export interface FormValues extends StepOneValues, StepTwoValues, StepThreeValues {}