import { FC, memo } from 'react'
import { IconType } from 'react-icons'
import cn from 'clsx'
import { convertPrice } from '@/utils/convertPrice'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
  className?: string
	total?: number
	discountTotal?: number
}

const SquareButton: FC<ISquareButton> = memo(({ Icon, onClick, number, className, total, discountTotal }) =>{

	return (
		<button
			onClick={onClick}
			className={cn(
        'p-2.5 bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 relative rounded', className
      )}
		>
			{!!number && (
				<span 
					className='flex h-6 w-6 items-center justify-center rounded-full bg-tertiary p-2 text-[0.75rem] text-white absolute -top-2 -right-2'
				>
					{number}
				</span>
			)}
			<Icon className='text-white' size={26} />
			{total && 
				<span 
					className='text-white ml-2 pl-2 border-l border-gray text-xs font-semibold'
				>
					{discountTotal ? (
						<span>{convertPrice(total - discountTotal)}</span>
					) : (
						<span>{convertPrice(total)}</span>
					)}
				</span>
			}
		</button>
	)
})

export default SquareButton
