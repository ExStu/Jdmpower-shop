import { StepTwoState, StepTwoValues } from './types'
import { getFormReducers } from '@/utils/getFormReducers'
import { createSlice } from '@reduxjs/toolkit'

const initialState: StepTwoState = {
  values: {
    name: '',
    surname: '',
    phone: '',
    email: ''
  },
  isDone: false
}

const slice = createSlice({
  name: 'stepTwo',
  initialState,
  reducers: getFormReducers<StepTwoState, StepTwoValues>(initialState)
})

export const {setValues, setIsDone, reset} = slice.actions
export const stepTwo = slice.reducer