import { useUpload } from './useUpload'
import cn from 'clsx'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'

// import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
// import { IUploadField } from '../form.interface'
import styles from './Upload.module.scss'
import { FieldError } from 'react-hook-form'
import { Skeleton } from 'antd'

export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	image,
	folder,
	onChange,
	isNoImage = false,
}) => {
	const { uploadImage, isLoading } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadImage} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<Skeleton active className="w-full h-full" />
						) : (
							image && <Image src={image} alt="" layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
