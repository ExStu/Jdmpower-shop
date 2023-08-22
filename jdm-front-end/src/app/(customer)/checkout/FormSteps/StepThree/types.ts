import { FormStepState } from '../types'

export interface StepThreeValues {
  delivery: boolean
  lastname: string
  surname: string
  town: string
  address: string
  extra: boolean
  comment: string
}

export type StepThreeState = FormStepState<StepThreeValues>
