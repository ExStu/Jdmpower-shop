import { StepThreeState, StepThreeValues } from './types'
import { getFormReducers } from '@/utils/getFormReducers'
import { createSlice } from '@reduxjs/toolkit'

const initialState: StepThreeState = {
  values: {
    delivery: false,
    lastname: '',
    surname: '',
    town: '',
    address: '',
    extra: false,
    comment: ''
  },
  isDone: false
}

const slice = createSlice({
  name: 'stepThree',
  initialState,
  reducers: getFormReducers<StepThreeState, StepThreeValues>(initialState)
})

export const {setValues, setIsDone, reset} = slice.actions
export const stepThree = slice.reducer