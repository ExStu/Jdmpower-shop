import { ICartItem } from '@/types/cart.interface'
import { FormStepState } from '../types'

export interface StepOneValues {
  items: ICartItem[]
}

export type StepOneState = FormStepState<StepOneValues>
