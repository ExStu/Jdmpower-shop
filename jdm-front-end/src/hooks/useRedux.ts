import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, TypeRootState } from '@/store/store'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector
