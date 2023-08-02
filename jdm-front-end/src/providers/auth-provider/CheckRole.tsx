// import { FC, PropsWithChildren } from 'react'
// import { TypeComponentAuthFields } from './auth-page.types'
// import { useAuth } from '@/hooks/useAuth'
// import { useRouter } from 'next/router'
// import { EnumUrl } from '@/constants/url.constants'

// const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component: {isOnlyUser}, children}) => {

//   const {user} = useAuth()
//   const router = useRouter()

//   if(user && isOnlyUser) return <>{children}</>

//   router.pathname !== EnumUrl.AUTH && router.replace(EnumUrl.AUTH)

//   return null

// }

// export default CheckRole;
