import axios from 'axios'
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type FormPageState, type FormValues } from './types'
// import { BASE_URL } from 'utils/consts'

const initialState: FormPageState = {
  currentStep: 1,
  modalIsOpen: false,
  isSuccess: false,
  isLoading: false
}

export const sendForm = createAsyncThunk(
  'form/sendForm',
  async (formValues: FormValues) => {
    console.log(formValues);
    // const {
    //   data
    // } = await axios.post<FormValues>(`/api/send`, formValues)
    // return data
  }
)

const slice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
    setModalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, state => {
        state.isLoading = true
      })
      .addCase(sendForm.fulfilled, state => {
        state.isLoading = false
        state.modalIsOpen = true
        state.isSuccess = true
      })
      .addCase(sendForm.rejected, state => {
        state.isLoading = false
        state.modalIsOpen = true
        state.isSuccess = false
      })
  }
})

export const { setCurrentStep, setModalIsOpen } = slice.actions
export const form = slice.reducer
