import cn from 'clsx'
import { forwardRef, useState } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, title, field, ...rest },
		ref
	) => {

		// const [value, setValue] = useState('')

		// const getValue = () => {
		// 	if(field.value) {
		// 		setValue(field.value)
		// 	}
		// }

		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					<span className='mb-1 block'>
						{Icon && <Icon className='mr-3' />}
						{title}
					</span>
					<input
						ref={ref}
						type={type}
						// value={field}
						placeholder={placeholder}
						className={cn(
							'px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-black/60 placeholder:text-sm',
							{
								'border-red': !!error
							}
						)}
						{...rest}
					/>
				</label>
				{error && <div className='text-red mt-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
