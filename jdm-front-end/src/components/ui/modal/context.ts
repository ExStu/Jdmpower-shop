import { createContext, useContext } from 'react'
import { type ModalContextState } from './types'

export const ModalContext = createContext<ModalContextState>(
  { onClose: () => {} }
)

export const useModalContext = () => {
  return useContext(ModalContext)
}
