import { FC } from 'react'
import { ITextarea } from './textarea.interface'
import { forwardRef } from 'react'
import cn from 'clsx'



const Textarea = forwardRef<HTMLTextAreaElement, ITextarea> (
  ({placeholder, error, className, style, title, ...rest}, ref) => {
  return (
    <div className={cn('mb-4', className)} style={style}>
      <label>
        <span className='mb-1 block'>
          {/* {Icon && <Icon className='mr-3' />} */}
          {title}
        </span>
        <textarea
          rows={6}
          ref={ref}
          placeholder={placeholder}
          className={cn(
            'px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-black/60 placeholder:text-sm resize-none',
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

export default Textarea;
