import { getFormReducers } from '@/utils/getFormReducers'
import { createSlice } from '@reduxjs/toolkit'
import { StepOneState, StepOneValues } from './types'
import { getCartItemsState } from '@/store/selectors'
import { useCart } from '@/hooks/useCart'
import { useAppSelector } from '@/hooks/useRedux'

// const {items} = useCart()
// const items = useAppSelector(getCartItemsState)

const initialState: StepOneState = {
  values: {
    items: []
  },
  isDone: false
}

const slice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: getFormReducers<StepOneState, StepOneValues>(initialState)
})

export const {setValues, setIsDone, reset} = slice.actions
export const stepOne = slice.reducer