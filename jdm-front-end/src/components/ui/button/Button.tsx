import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'
// import { ButtonVar } from '@/constants/button.constants'
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children, 
  className,
  type = 'button', 
  variant, 
  size = 'md', 
  ...rest
  }) => {
  return(
    <button
      {...rest}
      className={cn('rounded-sm font-medium px-8 py-2', {
      'text-white bg-primary': variant === 'dark',
      'text-secondary bg-gray': variant === 'light',
      'px-5 py-1 text-sm' : size === 'sm'
    }, className)}
    >
      {children}
    </button>
  ) 
}

export default Button;
