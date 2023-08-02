import { FC } from 'react'
import { IconType } from 'react-icons'
import cn from 'clsx'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
  className?: string
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number, className }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
        'h-12 w-12 bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 relative rounded', className
      )}
		>
			{!!number && (
				<span className='flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5 text-[0.75rem] text-secondary absolute -top-1 -right-1'>
					{number}
				</span>
			)}
			<Icon className='text-white' size={26} />
		</button>
	)
}

export default SquareButton
