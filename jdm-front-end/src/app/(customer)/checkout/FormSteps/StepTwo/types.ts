import { FormStepState } from '../types'

export interface StepTwoValues {
  name: string
  surname: string
  phone: string
  email: string
}

export type StepTwoState = FormStepState<StepTwoValues>