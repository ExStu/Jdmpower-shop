import { FormStepState, FormStepValues } from '@/app/(customer)/checkout/FormSteps/types'
import { type PayloadAction } from '@reduxjs/toolkit'
// import { type FormStepState, type FormStepValues } from 'pages/FormPage/FormSteps/types'

export const getFormReducers = <
  State extends FormStepState<FormStepValues>,
  Payload extends FormStepValues
>(initialState: State) => {
  return {
    setValues: (state: State, action: PayloadAction<Payload>) => {
      state.values = action.payload
    },
    setIsDone: (state: State, action: PayloadAction<boolean>) => {
      state.isDone = action.payload
    },
    reset: () => initialState
  }
}
