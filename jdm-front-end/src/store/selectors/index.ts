import { TypeRootState } from '../store'

export const getAuthState = (state: TypeRootState) => state.user

export const getCartItemsState = (state: TypeRootState) => state.cart.items

export const getFiltersState = (state: TypeRootState) => state.filters

export const getStepOneState = (state: TypeRootState) => state.stepOne

export const getStepTwoState = (state: TypeRootState) => state.stepTwo

export const getStepThreeState = (state: TypeRootState) => state.stepThree

export const getCurrentStep = (state: TypeRootState) => state.checkout.currentStep

export const getFormState = (statel: TypeRootState) => statel.checkout

export const getFormLoading = (state: TypeRootState) => state.checkout.isLoading

export const getAllValues = (state: TypeRootState) => ({
  ...state.stepTwo.values,
  ...state.stepThree.values,
})