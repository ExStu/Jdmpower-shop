export type FormStepValues = Record<string, any>

export interface FormStepState<T extends FormStepValues> {
  values: T
  isDone: boolean
}