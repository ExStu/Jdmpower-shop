import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
// import { IconType } from 'react-icons'

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholder: string
	// Icon?: IconType
	error?: string
}
