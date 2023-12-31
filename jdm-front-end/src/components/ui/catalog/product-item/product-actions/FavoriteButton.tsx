import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useProfile } from '@/hooks/useProfile'

import { UserService } from '@/services/user.service'
import {RxCross2} from 'react-icons/rx'

interface IFavoriteButton {
	productId: number
	row?: boolean
	className?: string
}

const FavoriteButton: FC<IFavoriteButton> = ({ productId, row, className }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	// if (!profile) return null

	const isExists = profile?.favorites.some(favorite => favorite.id === productId)

	return (
		<div className={className}>
			{row ? (
				<button onClick={() => mutate()} className='hover:text-primary transition-colors duration-200'>
					<RxCross2 size={30}/>
				</button>
			) : (
				<button 
					onClick={() => mutate()} 
					className={isExists ?
						'text-white bg-primary-light rounded-full p-1.5 hover:text-primary transition-colors duration-200' 
					 		: 
						'text-black hover:text-white hover:bg-primary transition-colors duration-200 bg-white shadow-md flex items-center justify-center rounded-full p-1.5'
					}
				>
					{isExists ? <AiOutlineHeart size={22} /> : <AiOutlineHeart size={22}/>}
				</button>
			)
			}
		</div>
	)
}

export default FavoriteButton
