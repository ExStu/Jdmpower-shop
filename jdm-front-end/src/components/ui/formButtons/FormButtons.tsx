// import { Button } from 'antd'
import { FC } from 'react'
import Button from '../button/Button'

interface FormButtonsProps {
  submitDisabled: boolean
  previousStep: () => void
  isLastStep?: boolean
  isLoading?: boolean
}

export const FormButtons: FC<FormButtonsProps> = ({ previousStep, submitDisabled, isLastStep }) => {
  // const { previousStep, submitDisabled, isLastStep, isLoading } = props

  return (

    <div className='mt-10 flex justify-between'>
      <Button
        onClick={previousStep}
        variant="light"
        id='button-back'
      >
        Назад
      </Button>

      <Button
        // isLoading={isLoading}
        disabled={submitDisabled}
        type="submit"
        variant='dark'
        // id={isLastStep ? 'button-send' : 'button-next'}
      >
        {isLastStep ? 'Отправить' : 'Далее'}
      </Button>
    </div>
  )
}