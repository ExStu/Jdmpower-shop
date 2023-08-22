import {FC, Fragment} from 'react'
import styles from './ProgressBar.module.scss'
import cn from 'clsx'


interface IProgressBar {
  className?: string
  totalSteps: number
  currentStep: number
}

const ProgressBar: FC<IProgressBar> = ({
  className,
  totalSteps,
  currentStep
}) => {
  return (
    <div className='flex items-center w-full h-2 bg-gray mb-16'>
      {[...new Array(totalSteps)].map((_, i) => (
        <Fragment key={i}>
          {i === 0
            ? null
            : <div className={cn([styles.line], {
              [styles.filled]: i < currentStep
            })}/>}

          <div className={cn([styles.circle], {
            [styles.current]: i === currentStep - 1,
            [styles.done]: i < currentStep - 1
          })}>
            <span className={cn([styles.step], {
              [styles.done]: i < currentStep
            })}>{i + 1}</span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default ProgressBar;
