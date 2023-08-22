import { type ReactNode } from 'react'

export interface ModalContextState {
  onClose: (() => void) | undefined
}

export interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: (() => void) | undefined
  className?: string
}