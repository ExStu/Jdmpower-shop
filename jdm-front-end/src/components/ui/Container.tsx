import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <div className='mx-auto max-w-[1440px] w-full px-10'>
      {children}
    </div>
  )
}

export default Container;
