import { InputHTMLAttributes } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import { IconType } from 'react-icons'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	title?: string
	Icon?: IconType
	error?: string
	field?: ControllerRenderProps<any, any>
}
