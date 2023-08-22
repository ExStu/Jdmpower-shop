import { type ChangeEvent, type KeyboardEvent } from 'react'

export const usePhoneMask = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const numberValue = getNumberValue(input.value)
    const selectionStart = input.selectionStart

    if (!input.value) {
      return
    }

    if (input.value.length !== selectionStart && numberValue.length < 11) {
      const { data } = e.nativeEvent as InputEvent
      if (data && /\D/.test(data)) {
        input.value = numberValue
      }
      return
    }

    input.value = getFormattedValue(numberValue)

    if (input.value.length >= 18) {
      input.setSelectionRange(selectionStart, selectionStart)
    }
  }

  const getFormattedValue = (value: string): string => {
    let formattedValue = ''

    if (['7', '8', '9'].includes(value[0])) {
      switch (value[0]) {
        case '7':
          formattedValue = '+7' + ' '
          break
        case '8':
          formattedValue = '+7' + ' '
          break
        case '9':
          formattedValue = '+7' + ' (' + value
          break
      }

      if (value.length > 1) {
        formattedValue += '(' + value.substring(1, 4)
      }

      if (value.length >= 5) {
        formattedValue += ') ' + value.substring(4, 7)
      }

      if (value.length >= 8) {
        formattedValue += '-' + value.substring(7, 9)
      }

      if (value.length >= 10) {
        formattedValue += '-' + value.substring(9, 11)
      }
    } else {
      formattedValue = '+' + value.substring(0, 16)
    }

    return formattedValue
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    if (e.key === 'Backspace' && getNumberValue(input.value).length === 1) {
      input.value = ''
    }
  }

  const getNumberValue = (str: string): string => {
    return str.replace(/\D/g, '')
  }

  return { onChange, onKeyDown }
}
